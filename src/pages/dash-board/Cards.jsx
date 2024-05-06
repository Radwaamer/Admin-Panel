import React from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../../theme';
import { Box, Paper, Typography } from '@mui/material'
import ProgressCircle from '../../components/ProgressCircle';

const Cards = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Paper sx={{backgroundColor:colors.primary[400],display:"flex",alignItems:"center",justifyContent:"space-around", gap:7, p:3}}>
        <Box sx={{textAlign:"center"}}>
            {props.icon}
            <Typography variant='h4' sx={{fontWeight:600}}>{props.count}</Typography>
            <Typography variant='h6' sx={{color:colors.greenAccent[500]}}>{props.text}</Typography>
        </Box>
        <Box>
            <ProgressCircle increase={props.increase} wh={"40px"}/>
            <Typography variant='h6' sx={{color:colors.greenAccent[500],mt:1}}>{props.increase}</Typography>
        </Box>
    </Paper>
  )
}

export default Cards