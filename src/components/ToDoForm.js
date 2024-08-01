import React from 'react'
import { useState } from 'react';
import { FormControl, Container, TextField, Button } from '@mui/material';
import '../App.css'

const ToDoForm = ({ addToDo }) => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("")
        console.log("added", text)
    }
    return (
        <Container maxWidth="sm" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true} >
                    <TextField label="I will Do this" required={true} size='medium' variant='standard' value={text} onChange={e => setText(e.target.value)} className='textStyle' />
                    <Button color="primary" variant="contained" sx={{ mt: 2 }} type='submit'>+ADD</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default ToDoForm
