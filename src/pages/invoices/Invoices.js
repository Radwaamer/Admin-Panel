import React, { useState, useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { Box } from '@mui/material';
  import Head from '../../components/Head';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [table, setTable]=useState([]);
    useEffect(()=>{
        // async ()=>{
        // const res= await fetch("./db/Invoices-data.json");
        // const data= await res.json();
        // setTable(data);
        // }
        fetch("http://localhost:3030/invoices")
        .then(res=>res.json())
        .then(data=>setTable(data))
    },[table]);

        const columns = [
            { field: 'id', headerName: 'ID', flex:3 },
            { field: 'name', headerName: 'Name', flex:5 },
            { field: 'phone', headerName: 'Phone Number', flex:5 },
            { field: 'email', headerName: 'Email', flex:6 },
            { 
                field: 'cost',
                headerName: 'Cost',
                flex:5,
                renderCell:({row : {cost}})=>{
                    return (
                        <Typography variant='h6' sx={{color:colors.greenAccent[500]}}>${cost}</Typography>
                    )
                  }
            },
            { field: 'date', headerName: 'Date', flex:5 },
        ];


  return (
    <Box>

        <Head name={"Invoices"} title={"List of Invoice Balances"}/>

        {table.length !==0 ?
        <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"} sx={{
        '& .MuiDataGrid-columnHeaders':{backgroundColor:colors.blueAccent[700], fontFamily:"bold", fontSize:"0.94rem"},
        '& .MuiDataGrid-footerContainer':{backgroundColor:colors.blueAccent[700]},
        '& .MuiDataGrid-root':{border:"none"},
        '& .MuiDataGrid-root .MuiDataGrid-row': {backgroundColor:colors.primary[400]},
        "& .MuiCheckbox-root": {color: `${colors.greenAccent[300]} !important`},
        "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-root .MuiDataGrid-cell:focus": {outline:"none"},
        "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {outline:"none"},
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: `${colors.grey[100]} !important`},
        }}>
          <DataGrid
            rows={table}
            columns={columns}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </Box> : null}

    </Box>
  )
}

export default Invoices;