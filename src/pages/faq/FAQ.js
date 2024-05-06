import { DoubleArrow, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Head from '../../components/Head';
import { tokens } from '../../theme';
import { questions } from '../../data/questions';

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <>
    <Box>
      <Head name={"FAQ"} title={"Frequently Asked Questions Page"}/>
    </Box>
    <Box width={"75%"} mx={"auto"} minWidth={"600px"}>
        {questions.map((question,index)=>
        <Accordion key={index} sx={{backgroundColor:colors.primary[400], mb:3}}>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography variant='h4' sx={{color:colors.redAccent[300]}}>{question.quistion}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{display:"flex", gap:1, alignItems:"center"}}>
                <DoubleArrow sx={{color:colors.redAccent[600]}}/>
                <Typography variant='h6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
            <AccordionDetails sx={{display:"flex", gap:1, alignItems:"center"}}>
                <DoubleArrow sx={{color:colors.redAccent[600]}}/>
                <Typography variant='h6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
            )}
    </Box>
    </>
  )
}

export default FAQ;