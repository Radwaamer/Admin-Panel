import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Head from '../../components/Head';

const Calendar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const date= new Date();
    const monthNames = [
                            "Jan", "Febr", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];
    const events=[
        {title:"All-day event", date:`${monthNames[date.getMonth()]} ${date.getDate()-5}, ${date.getFullYear()}`},
        {title:"Timed event", date:`${monthNames[date.getMonth()]} ${date.getDate()+4}, ${date.getFullYear()}`},
        {title:"USA Trip", date:`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
    ]

  return (
    <>
    <Box>
      <Head name={"Calendar"} title={"Full Calendar Interactive Page"}/>
    </Box>
    <Box height={"calc(100vh - 14rem)"} width={"calc(100vw - 9rem)"} 
        mx={"auto"} minWidth={"600px"} display={"flex"} gap={6}>
        <Box sx={{backgroundColor:colors.primary[400], p:2, flex:1, borderRadius:"4px"}}>
            <Typography variant='h6'>Events</Typography>
            {events.map((event,index)=>
                <Paper key={index} sx={{backgroundColor:colors.greenAccent[600], p:1, mt:2}}>
                    <Typography variant='h6'>{event.title}</Typography>
                    <Typography variant='h6'>{event.date}</Typography>
                </Paper>
            )}
        </Box>
        <Box sx={{flex:6,"& .fc .fc-button-primary:focus": {boxShadow:"none !important"}}}>
            <FullCalendar
                height={"100%"}
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                ]}
                initialView="dayGridMonth"
                events={[
                    { title: events[0].title, date: `${date.getFullYear()}-${date.getMonth()<9?`0${date.getMonth()+1}`:date.getMonth()+1}-${date.getDate()-5<10?`0${date.getDate()-5}`:date.getDate()-5}` },
                    { title: events[1].title, date: `${date.getFullYear()}-${date.getMonth()<9?`0${date.getMonth()+1}`:date.getMonth()+1}-${date.getDate()<6?`0${date.getDate()+4}`:date.getDate()+4}` },
                    { title: events[2].title, date: new Date().toJSON().slice(0, 10) },
                ]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                selectable={true}
            />
        </Box>
    </Box>
    </>
  )
}
export default Calendar;