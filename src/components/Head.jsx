import React from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';
import { Box, Typography } from '@mui/material';

const Head = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box mb={5}>
        <Typography variant='h2' sx={{fontWeight:"600"}}>{props.name}</Typography>
        <Typography variant='h5' sx={{color:colors.greenAccent[500],mt:1}}>{props.title}</Typography>
    </Box>
  )
}

export default Head;