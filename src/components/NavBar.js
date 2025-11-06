import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ background: 'transparent', pb:1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: '#fff', fontFamily: "'Pacifico', cursive" }}>
            Student Project Management
          </Typography>
        </Box>
        <Box>
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/projects" color="inherit">Projects</Button>
          <Button component={RouterLink} to="/dashboard" color="inherit">Dashboard</Button>
          <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
          <Button component={RouterLink} to="/signin" color="inherit" sx={{ ml: 2 }}>Sign In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
