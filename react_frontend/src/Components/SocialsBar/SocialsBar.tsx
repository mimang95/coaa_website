import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoIcon from '../Icons/LogoIcon';
import './socials_bar.css';
import {Link} from "react-router-dom"

function SocialsBar() {
    return ( 
    <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <div className='social-icons'>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href="https://www.google.com/"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <LogoIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href="https://music.apple.com/de/album/captains-and-kings/1249278270?app=music&mt=1"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <AppleIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href='https://www.facebook.com/conclusionofanage/'
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href='https://www.youtube.com/c/conclusionofanage'
                target="_blank" 
                rel="noopener noreferrer"
            >
                <YouTubeIcon />
            </IconButton><IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href='https://www.instagram.com/coaaband/?hl=de'
                target="_blank" 
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </IconButton>
            </div>
            
            <Stack direction="row" spacing={2}>
            </Stack>
            </Toolbar>
        </AppBar>
        </Box>
    </>
     );
}

export default SocialsBar;