import React from 'react'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../../theme';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Head from '../../components/Head';
import { Download, FileDownload, GroupAdd, Mail, PointOfSale, Traffic } from '@mui/icons-material';
import Cards from './Cards';
import LineChart from '../../components/LineChart';
import Transactions from './Transactions';
import DataCards from './DataCards';
import ProgressCircle from '../../components/ProgressCircle';
import BarChart from '../../components/BarChart';
import GeoChart from './../../components/GeoChart';

const DashBoard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const cards=[
    {icon:<Mail sx={{color:colors.greenAccent[500], fontSize:35}}/>,
    count:"12,361",text:"Emails Sent",increase:"+14%"},
    {icon:<PointOfSale sx={{color:colors.greenAccent[500], fontSize:35}}/>,
    count:"431,225",text:"Sales Obtained",increase:"+21%"},
    {icon:<GroupAdd sx={{color:colors.greenAccent[500], fontSize:35}}/>,
    count:"32,441",text:"New Clients",increase:"+5%"},
    {icon:<Traffic sx={{color:colors.greenAccent[500], fontSize:35}}/>,
    count:"1,325,134",text:"Traffic Received",increase:"+43%"}
  ]

  return (

    <Box width={"calc(100vw - 9rem)"} mx={"auto"}>

      {/* start head */}
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",}}>
        <Head name={"DASHBOARD"} title={"Welcome to your dashboard"}/>
        <Button variant="contained" sx={{textTransform:"uppercase", backgroundColor:colors.blueAccent[500], px:2, py:1,mt:-4,'&:hover':{backgroundColor:colors.blueAccent[400]}}}><FileDownload />download reports</Button>
      </Box>
      {/* end head */}

      {/* start cards */}
      <Box sx={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))", gap:3}}>
        {cards.map(card=>(
          <Cards key={card.text} icon={card.icon} count={card.count} text={card.text} increase={card.increase}/>
        ))}
      </Box>
      {/* end cards */}

      {/* start line chart and transactions */}
      <Box sx={{mt:3, display:"flex",gap:2, flexWrap:"wrap"}}>
        <Box sx={{flex:2, backgroundColor:colors.primary[400], borderRadius:"4px", width:"30rem", minWidth:"580px"}}>
          <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Box sx={{p:3, pb:0}}>
              <Typography variant='h5'>Revenue Generated</Typography>
              <Typography variant='h4' sx={{fontWeight:600, color:colors.greenAccent[500]}}>$59,342.32</Typography>
            </Box>
            <IconButton size="large" aria-label="download chart" color="inherit" sx={{marginRight:3, marginTop:3}}>
              <Download sx={{color:colors.greenAccent[500],fontSize:27}}/>
            </IconButton>
          </Box>
          <Box height={"23rem"}>
            <LineChart />
          </Box>
        </Box>

        <Transactions />

      </Box>
      {/* end line chart and transactions */}

      {/* start circle and pie and geo charts */}
      <Box sx={{mt:3,display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(400px,1fr))", gap:3}}>

        <DataCards head="Campaign" content={
          <>
            <ProgressCircle increase={"+75%"} wh={"130px"}/>
            <Typography variant='h5' color={colors.greenAccent[500]} my={1}>$48,352 revenue generated</Typography>
            <Typography variant='h6'>Includes extra misc expenditures and costs</Typography>
          </>
          }/>

        <DataCards head="Sales Quantity" content={
          <Box height={"100%"} width={"100%"}>
            <BarChart />
          </Box>
        }/>

        <DataCards head="Geography Based Traffic" content={
          <Box height={"100%"} width={"100%"}>
            <GeoChart />
          </Box>
        }/>

      </Box>
      {/* end circle and pie and geo charts */}

    </Box>
  )
}

export default DashBoard;