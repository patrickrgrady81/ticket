import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LogoutIcon from '@mui/icons-material/Logout';

import TicketForm from '../TicketForm';
import MyTickets from '../MyTickets';
import AllTickets from '../AllTickets';

import { IsLoggedInContext } from '../../context/isLoggedInContext';

const drawerWidth = 240;



const SideDrawer = () => {

    const [index, setIndex] = useState(0);
    const [, setLoggedIn] = useContext(IsLoggedInContext);
    
    const handleSideClick = (index) => {
        setIndex(index);
    }

    const getIcon = (index) => {
      switch(index) {
        case 0: return <CreateIcon/>
        case 1: return <LocalActivityIcon/>
        case 2: return <ConfirmationNumberIcon/>
        case 3: return <LogoutIcon/>
        default: console.log("No such icon");
    }
    }

    const getSidebarAction = () => {
        switch(index) {
            case 0:
                return <TicketForm/>
            case 1:
                return <MyTickets/>
            case 2:
                return <AllTickets/>
            case 3: 
                return setLoggedIn(false);
            default:
                console.log(index);
        }
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{justifyContent: 'center', alignSelf: 'center'}}>
          <Typography variant="h6" noWrap component="div">
            <p className="center">Dashboard</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Create Ticket', 'My Tickets', 'All Tickets', 'Logout'].map((text, index) => (
            <ListItem button key={text} onClick={() => handleSideClick(index)}>
              <ListItemIcon>
                {getIcon(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        {getSidebarAction()}

      </Box>
    </Box>
  );
}

export default  SideDrawer;