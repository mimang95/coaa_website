import * as React from 'react';
import { Autocomplete, Grid, TextField, Button } from '@mui/material';
import './ItemPage.css'
import ImageCarousel from '../Components/ImageSlider/ImageCarousel';

function ItemPage(props: any) {
    return ( 
        <>
                
                <Grid container>
                    <Grid xs={3} />
                        <Grid xs={3} >
                            <img className='shop-img' src={props.src}></img>
                            <ImageCarousel image1={'/images/basic-shirt.jpg'} image3={'/images/basic-shirt.jpg'}/>
                        </Grid>
                    <Grid xs={3}>
                        <h1>{props.title}</h1><br />
                        <h2>{props.price}</h2><br />
                        {props.size && 
                        <Autocomplete 
                            options={props.size} 
                            renderInput={(params) => <TextField {...params} label="groesse" />}/>}
                        <TextField type={'number'} label="anzahl"/>
                        <Button variant='contained'>In den Warenkorb</Button>
                    </Grid>
                    <Grid xs={3} />
                </Grid>
                
        </>
     );
}

export default ItemPage;