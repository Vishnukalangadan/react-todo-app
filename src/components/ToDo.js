import React from 'react'
import { Card, CardContent, Typography, IconButton, Container } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const ToDo = ({ data, checkToDo, deleteToDo }) => {

    const markCompleted = () => {
        checkToDo(data.id);
    }
    const deleteCard = () => {
        deleteToDo(data.id);
    }
    return (
        <Container>
            <Card sx={{ mt: 5, backgroundColor: 'LightGrey' }}>
                <CardContent>
                    <Typography sx={data.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                        <IconButton sx={{ float: 'right' }} onClick={deleteCard}>
                            <DeleteIcon sx={{ color: 'red' }} />
                        </IconButton>
                        <IconButton onClick={markCompleted}>
                            <DoneIcon sx={{ color: 'green' }} />
                        </IconButton>
                        {data.title}
                    </Typography>

                </CardContent>
            </Card>
        </Container>
    )
}
export default ToDo
