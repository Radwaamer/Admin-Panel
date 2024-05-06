import React from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../../theme';
import { Paper, Typography, Box } from '@mui/material';

const DataCards = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Paper sx={{backgroundColor:colors.primary[400], p:3}}>
        <Typography variant='h4' sx={{mb:2}}>{props.head}</Typography>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", height:"17rem"}}>
          {props.content}
        </Box>
    </Paper>
  )
}

export default DataCards