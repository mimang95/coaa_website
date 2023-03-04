import React from 'react'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import './Footer.css'

function Footer() {
    const year: number = new Date().getFullYear()
    return ( 
        <>
            <div className='buttons-div'>
                <Button className='impressum-btn' color='inherit'><Link to='/impressum'>Impressum</Link></Button>
                <Button className='agb-btn' color='inherit'><Link to='/agb'>AGB</Link></Button>
                <Button className='datenschutz-btn' color='inherit'><Link to='/Datenschutz'>Datenschutz</Link></Button>
            </div>
            
            <p className='copyright-link'>© {year} by CONCLUSION OF AN AGE</p>
        </>
     );
}

export default Footer;