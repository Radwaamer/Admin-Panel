import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Sidebar from './components/sidebar/Sidebar';
import DashBoard from './pages/dash-board/DashBoard';
import Team from './pages/team/Team';
import Line from './pages/line/Line';
import Bar from './pages/bar/Bar';
import Geo from './pages/geo/Geo';
import Pie from './pages/pie/Pie';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Calendar from './pages/calendar/Calendar';
import FAQ from './pages/faq/FAQ';
import ProfileForm from './pages/profile-form/ProfileForm';

const App = ()=> {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route index element={<DashBoard />} />
            <Route path='/dash' element={<DashBoard />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/invoices' element={<Invoices />} />
            <Route path='/profile_form' element={<ProfileForm />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/line' element={<Line />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/geo' element={<Geo />} />
            <Route path='/pie' element={<Pie />} />
          </Route>
        </Routes>
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
