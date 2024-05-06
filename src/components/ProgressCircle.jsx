import { Box } from '@mui/material';
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../theme';

const ProgressCircle = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = +props.increase.split("+")[1].split("%")[0]/100 * 360;

  return (
    <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: props.wh,
                height: props.wh,
            }}
            />
  )
}

export default ProgressCircle;