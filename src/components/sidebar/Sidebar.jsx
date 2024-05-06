import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, ListSubheader, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Topbar from '../topbar/Topbar';
import {  NavLink, Outlet } from 'react-router-dom';
import { BarChart, CalendarMonth, Contacts, Dashboard, Help, Map, PeopleAlt, Person, PieChart, Receipt, Timeline } from '@mui/icons-material';
import { tokens } from '../../theme';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Topbar />
        </Toolbar>
      </AppBar>

      {/* start drawer */}
      <Drawer variant="permanent" open={open}>

        {/* start admin */}
        <DrawerHeader>
          <Typography variant='h5' sx={{textTransform:"uppercase", mr:"auto", pl: 1}}>admin</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* end admin */}

        <Divider />

        

        {/* start dash */}
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>

          <Box sx={{textAlign: "center", display: open ? 'block' : 'none', mb:2}}>
            <Avatar alt="Radwa Amer" src="./images/Avatar.webp" sx={{ width: 130, height: 130, mx: "auto"}} />
            <Typography paragraph sx={{fontWeight:"700", fontSize:23, margin:0}}>Radwa Amer</Typography>
            <Typography sx={{fontSize: 15, color: colors.greenAccent[500]}}>CEO</Typography>
          </Box>

          <NavLink to={"/dash"}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  '.active &': {color:colors.blueAccent[400]}
                }}
              >
                <Dashboard />
              </ListItemIcon>
              <ListItemText  primary={"Dashboard"} sx={{ opacity: open ? 1 : 0, color: colors.grey[100], '.active &': {color:colors.blueAccent[400]} }} />
            </ListItemButton>
          </NavLink>

          </ListItem>
        </List>
        {/* end dash */}

        {/* start data */}
        <List
        subheader={
          <ListSubheader sx={{px: open ? "" : 0, textAlign: open ? "" : "center"}} component="div" id="charts">
            Data
          </ListSubheader>
        }
        >
          {['Manage Team', 'Contacts Information', 'Invoices Balances'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <NavLink to={["team","contacts","invoices"][index]}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    '.active &': {color:colors.blueAccent[400]}
                  }}
                >
                  {[<PeopleAlt />,<Contacts />,<Receipt />][index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: colors.grey[100], '.active &': {color:colors.blueAccent[400]} }} />
              </ListItemButton>
            </NavLink>
            </ListItem>
          ))}
        </List>
        {/* end data */}

        <Divider />

        {/* start pages */}
        <List
        subheader={
          <ListSubheader sx={{px: open ? "" : 0, textAlign: open ? "" : "center"}} component="div" id="charts">
            Pages
          </ListSubheader>
        }
        >
          {['Profile Form', 'Calendar', 'FAQ Page'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <NavLink to={["profile_form","calendar","faq"][index]}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    '.active &': {color:colors.blueAccent[400]}
                  }}
                >
                  {[<Person />,<CalendarMonth />,<Help />][index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: colors.grey[100], '.active &': {color:colors.blueAccent[400]} }} />
              </ListItemButton>
            </NavLink>
            </ListItem>
          ))}
        </List>
        {/* end pages */}

        <Divider />

        {/* start charts */}
        <List
        subheader={
          <ListSubheader sx={{px: open ? "" : 0, textAlign: open ? "" : "center"}} component="div" id="charts">
            Charts
          </ListSubheader>
        }
        >
          {['Bar Chart', 'Pie Chart', 'Line Chart', 'Geography Chart'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <NavLink to={["bar","pie","line","geo"][index]}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      '.active &': {color:colors.blueAccent[400]}
                    }}
                  >
                    {[<BarChart />,<PieChart />,<Timeline />,<Map />][index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: colors.grey[100],'.active &': {color:colors.blueAccent[400]} }} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        {/* end charts */}

      </Drawer>
      {/* end drawer */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;