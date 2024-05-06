import { Box } from '@mui/material'
import React from 'react'
import Head from '../../components/Head'
import GeoChart from '../../components/GeoChart'

const Geo = () => {
  return (
    <>
    <Box>
      <Head name={"Geo Chart"} title={"Simple Geo Chart"}/>
    </Box>
    <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} mx={"auto"} minWidth={"600px"}>
        <GeoChart />
    </Box>
    </>
  )
}

export default Geo;