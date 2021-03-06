import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();


    const updateTodo = (event) => {
        event.preventDefault();

        db.collection('todos').doc(props.todo.id).set({
            todo: input,
        }, { merge: true })
        setOpen(false);
    }
    return (
        <div className="todo">

            <Modal className="model__todo"
                open={open}
                onClose={e => setOpen(false)} >
                <div className={classes.paper}>
                    <h3>You can change</h3>
                    <form className="update__todo">
                        <TextareaAutosize
                            rowsMin={2}
                            className="edit__text"
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={4}
                            placeholder={props.todo.todo}
                            value={!input ? props.todo.todo : input}
                            onChange={event => setInput(event.target.value)}

                        />
                        {/* <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} /> */}
                        <Button type="submit" onClick={updateTodo} variant="contained" color="secondary">Update</Button>

                    </form>
                </div>
            </Modal>


            <List key={props.todo.id} className="todo__list">
                <ListItem>
                    <ListItemText className="todo__one" primary={props.todo.todo} secondary={`Created ${props.todo.timestamp}`} />

                </ListItem>
                <EditIcon className="edit__icon" onClick={e => setOpen(true)}>Edit</EditIcon>
                <DeleteForeverIcon className="delete__icon" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </List>

        </div>
    )
}

export default Todo
