import { Grid } from '@mui/material'
import React from 'react'
import ShopItem from '../Components/ShopItem/ShopItem'
import data from '../data/StoreData'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export default function Store(){
    const shopItems = data.map(item => {
        return(
                <Grid item xs={4}>
                <ShopItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.img}
                />
                </Grid>
                
            )
        })
        return(
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Grid container>
                        {shopItems}
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Button color='primary'><Link to='/shopping-cart'>Shopping Cart</Link></Button>
                </Grid>
            </Grid>
        )
    }