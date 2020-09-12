import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css';
import React from 'react';
import { db } from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰"/>
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} color="secondary" />
        </List>
    )
}

export default Todo
