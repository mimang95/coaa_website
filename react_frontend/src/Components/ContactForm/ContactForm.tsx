import React, { useState } from 'react'
import { CardContent, TextField, Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';

function ContactForm() {
    const initialFormValues = {
        fullName: "",
        email: "",
        message:""
      }
    
    const [values, setValues] = useState(initialFormValues);
    function handleSubmit(e: any){
        e.preventDefault()
        console.log(values)
    }

    return (
        <Card>
            <CardContent>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={(e) => setValues({...values, fullName: e.target.value})} label="Full Name" fullWidth/>
                    <TextField onChange={(e) => setValues({...values, email: e.target.value})} label="Email" fullWidth/>
                    <TextField onChange={(e) => setValues({...values, message: e.target.value})} label="Message" fullWidth multiline rows={5}/>
                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
        </Card>
     );
}

export default ContactForm;