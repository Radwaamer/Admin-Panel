import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Button, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { DataGrid } from '@mui/x-data-grid';
import Head from './../../components/Head';
import { AdminPanelSettings, LockOpen, Security } from '@mui/icons-material';
import DialogPobUp from './DialogPobUp';
import FormDialog from './FormDialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import SnackBar from './SnackBar';

const Team = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [table, setTable]=useState([]);

  const getTable=()=>{
    fetch("https://admin-api-hiw8.onrender.com/team")
        .then(res=>res.json())
        .then(data=>setTable(data))
  }

  useEffect(()=>{
    getTable();
  },[]);

    const [openDelete, setOpenDelete] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [targetDelete, setTargetDelete] = useState(0);
    const [targetEdit, setTargetEdit] = useState({});
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [openSnack, setSnack] = useState(false);
    const [method, setMethod] = useState("")

  const columns = [
    { field: 'id', headerName: 'ID', flex:2 },
    { field: 'name', headerName: 'Name', flex:4 },
    { field: 'age', headerName: 'Age', flex:3},
    { field: 'phone', headerName: 'Phone Number', flex:4 },
    { field: 'email', headerName: 'Email', flex:5 },
    { 
      field: 'accessLevel',
      headerName: 'Access Level',
      flex:4,
      renderCell:({row : {access}})=>{
        return (
        <Box sx={{display:"flex", alignItems:"center", px:3, py:0.7, borderRadius:2,
        gap:0.5, width:"8rem", justifyContent:"center",}}
        backgroundColor={
          access=="Admin" ? colors.redAccent[700]
          : access == "Manager" ? colors.blueAccent[800]
          : colors.greenAccent[800]}>
          {access=="Admin" && <AdminPanelSettings />}
          {access=="Manager" && <Security />}
          {access=="User" && <LockOpen />}
          <Typography paragraph sx={{m:0}}>{access}</Typography>
        </Box>)
      }
    },
    { 
      field: 'action',
      headerName: 'Action',
      flex:4,
      renderCell:({row : {...row}})=>{
        return (
        <Box onClick={(e) => e.stopPropagation()} sx={{display:"flex", alignItems:"center", px:3, py:0.7, borderRadius:2,
        gap:2, width:"8rem", justifyContent:"center"}}>
          <Button variant="outlined" onClick={()=>{handleEdit(row)}}
          sx={{color:colors.greenAccent[400], '&, &:hover':{borderColor:colors.greenAccent[400]}}}>Edit</Button>
          <Button variant="outlined" onClick={()=>handleDelete(row)} 
          sx={{color:colors.redAccent[400], '&, &:hover':{borderColor:colors.redAccent[400]}}}>
            Delete
          </Button>
        </Box>)
      }
    }
  ];


  const handleDelete = (row)=>{
    setTargetDelete(row.id);
    setOpenDelete(true);
    setMethod("delete");
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleDeleteAgree = ()=>{
    fetch(`https://admin-api-hiw8.onrender.com/team/${targetDelete}`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "Application/Json"
      }
    }
    )
    .then(res=>res.json())
    .then(handleDeleteClose())
    .then(handleopenSnack())
    .then(setTable(()=>{
      return table.filter(dt=>{
        return dt.id!==targetDelete
      })
    }))
  };


  const handleopenSnack = () => {
    setSnack(true);
  };

  const closeSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack(false);
  };


  const handleEdit = (row)=>{
    setOpenForm(true);
    setTargetEdit(row);
    setMethod("update")
  }
  const formDialogClose = ()=>{
    setOpenForm(false);
  }
  const formDialogFun = (member)=>{
    fetch(`https://admin-api-hiw8.onrender.com/team/${method=="update"?'/'+targetEdit.id:""}`,{
      method: method=="update"?"PATCH":"POST",
      headers: {
        "Content-Type" : "Application/Json"
      },
      body: JSON.stringify(method=="update"?member:{"id":String(Date.now()),...member,"registrarId": 123512})
    }
    )
    .then(res=>res.json())
    .then(formDialogClose())
    .then(handleopenSnack())
  };


  const handleUpdate=(member)=>{
    const newData=table.map(dt=>{
      if(targetEdit.id==dt.id){
        return({...dt,...member})
      }
      return dt;
    })
    return newData;
  }

  const handleMember=(member)=>{
    setTable(method=="update"?
      handleUpdate(member) : [...table, {"id":String(Date.now()),...member,"registrarId": 123512}]
    );
  }

  const handleCreate = ()=>{
    setOpenForm(true);
    setMethod("create");
    setTargetEdit(0);
  }


  return (
    <Box>
      
      <Head name={"TEAM"} title={"Managing the Team Members"}/>

        <Button variant="contained" sx={{textTransform:"uppercase", backgroundColor:colors.blueAccent[500], px:2, py:1,mt:-4,
        '&:hover':{backgroundColor:colors.blueAccent[400]},margin:"0 0.5rem 1.5rem",marginLeft:"auto",display:"block"}} onClick={handleCreate}>
          Add New Team Member
        </Button>

      {table.length !==0 ?
        <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"} sx={{
        '& .MuiDataGrid-columnHeaders':{backgroundColor:colors.blueAccent[700], fontFamily:"bold", fontSize:"0.94rem"},
        '& .MuiDataGrid-footerContainer':{backgroundColor:colors.blueAccent[700]},
        '& .MuiDataGrid-root':{border:"none"},
        '& .MuiDataGrid-root .MuiDataGrid-row': {backgroundColor:colors.primary[400]},
        "& .MuiCheckbox-root": {color: `${colors.greenAccent[300]} !important`},
        "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-root .MuiDataGrid-cell:focus": {outline:"none"},
        "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {outline:"none"},
        }}>
          <DataGrid
            rows={table}
            columns={columns}
            checkboxSelection
          />
        </Box> : null}

        <DialogPobUp handleClose={handleDeleteClose} fullScreen={fullScreen} open={openDelete} handleAgree={handleDeleteAgree} />
        <FormDialog handleClose={formDialogClose} method={method} open={openForm}
        handleAgree={formDialogFun} member={targetEdit}  handleFront={handleMember}/>
        <SnackBar handleClose={closeSnack} open={openSnack} method={method}/>

    </Box>
  )
}

export default Team;