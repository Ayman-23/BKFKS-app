import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bangladesh KickFighter Karate Schoole
        </Typography>
        <Button color="inherit" component={NavLink} to="/">Home</Button>
        <Button color="inherit" component={NavLink} to="/about">About</Button>
        <Button color="inherit" component={NavLink} to="/classes">Classes</Button>
        <Button color="inherit" component={NavLink} to="/instructors">Instructors</Button>
        <Button color="inherit" component={NavLink} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
