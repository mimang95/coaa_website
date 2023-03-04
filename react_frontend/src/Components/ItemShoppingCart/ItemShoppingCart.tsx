import { Card, Grid, TextField } from "@mui/material";
import React from "react";

export default function ItemShoppingCart(props: any){
    return(
        <>
            <Card>
                <Grid container>
                    <Grid item xs={3}>
                        <img src={props.img} alt="" />
                    </Grid>
                    <Grid item xs={5}>
                        {props.title}
                    </Grid>
                    <Grid item xs={2}>
                        <TextField type={'number'}/>
                    </Grid>
                    <Grid item xs={2}>
                        {props.price}
                    </Grid>
                </Grid>
            </Card>
        </>
    )
    }