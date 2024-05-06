import { Box } from '@mui/material'
import React from 'react'
import Head from '../../components/Head'
import LineChart from '../../components/LineChart'

const Line = () => {
  return (
    <>
    <Box>
      <Head name={"Line Chart"} title={"Simple Line Chart"}/>
    </Box>
    <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"}>
        <LineChart />
    </Box>
    </>
  )
}

export default Line;