import React, { useEffect , useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../../theme';
import { Box, Collapse, Paper, Skeleton, Typography, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Transactions = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [trans,setTrans]=useState([]);

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(()=>{
        fetch("https://admin-api-hiw8.onrender.com/transactions")
        .then(res=>res.json())
        .then(data=>setTrans(data));
    },[]);

    let transComp=()=>{
            if(trans.length==0){
                return [1,2,3,4,5,6].map(selk=><Skeleton key={selk} variant="rounded" width={"100%"} height={"3.5rem"} sx={{my:2}}/>)
            }
            else{
                return trans.map(selk=>
                <Paper key={selk["txId"]} sx={{backgroundColor:colors.primary[400], p:2, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <Box>
                        <Typography variant='h6' sx={{color:colors.greenAccent[500]}}>{selk["txId"]}</Typography>
                        <Typography variant='h6'>{selk["user"]}</Typography>
                    </Box>
                    <Typography variant='h6'>{selk["date"]}</Typography>
                    <Typography variant='h6' sx={{backgroundColor:colors.greenAccent[400], p:1, borderRadius:2}}>{selk["cost"]} $</Typography>
                </Paper>);
            }
    }

  return (
    <Box sx={{flex:1, minWidth:"285px"}}>
        <Paper sx={{backgroundColor:colors.primary[400], p:2}} onClick={handleClick}>
            <ListItemButton onClick={handleClick} sx={{display:"flex", justifyContent:"space-between", alignItems:"center",p:0, "&:hover":{backgroundColor:"transparent"}}}>
                <Typography variant='h5' fontWeight={"600"}>Recent Transactions</Typography>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        </Paper>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box display={"grid"} gap={1} marginTop={1} sx={{height:"23.7rem", overflow:"auto"}}>
                {transComp()}
            </Box>
        </Collapse>
    </Box>
  )
}

export default Transactions;