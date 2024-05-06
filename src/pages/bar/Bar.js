import { Box } from '@mui/material'
import React from 'react'
import Head from '../../components/Head'
import BarChart from '../../components/BarChart'

const Bar = () => {
  return (
    <>
    <Box>
      <Head name={"Bar Chart"} title={"Simple Bar Chart"}/>
    </Box>
    <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"}>
        <BarChart />
    </Box>
    </>
  )
}

export default Bar;