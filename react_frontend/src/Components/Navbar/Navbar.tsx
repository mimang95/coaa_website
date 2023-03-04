import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COAA
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color='inherit'><Link to='/'>Home</Link></Button>
            <Button color='inherit'><Link to='/store'>Store</Link></Button>
            <Button color='inherit'><Link to='/about'>About</Link></Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}