import React from 'react'
import ShowsCard from '../Components/ShowsCard/ShowsCard'
import SocialsBar from '../Components/SocialsBar/SocialsBar'
import ContactForm from '../Components/ContactForm/ContactForm'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import { Grid } from '@mui/material';
import './Home.css'
import SpotifyPlayer from '../Components/SpotifyPlayer/SpotifyPlayer';

export default function Home(){
    return(
        <>
            <img src="./images/BD_shoot_title_pic.JPG" className='title_pic'/>
            <SocialsBar />
            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <VideoPlayer embedId="6YI1qrCg-NU" />
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <ShowsCard />
                </Grid>
                <Grid item xs={3}>
                    <SpotifyPlayer />
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <ContactForm />
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </>
    )
}