import { Box } from '@mui/material'
import React from 'react'
import Head from '../../components/Head'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <>
    <Box>
      <Head name={"Pie Chart"} title={"Simple Pie Chart"}/>
    </Box>
    <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"}>
        <PieChart />
    </Box>
    </>
  )
}

export default Pie;