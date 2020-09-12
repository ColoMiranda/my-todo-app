import {
  Button,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import { db } from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    // Update the DB
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Task edition</h3>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="todo__modalButtons">
            <Button onClick={(e) => setOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button disabled={!input} onClick={updateTodo} color="primary">
              Update
            </Button>
          </div>
        </div>
      </Modal>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="flex-start"
        justify="center"
      >
        <Grid item xs={6} md={3}>
          <List>
            <ListItem>
              <Grid>
                <Grid>
                  <ListItemText primary={props.todo.todo} />
                </Grid>
                <Grid>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon
                        onClick={(event) =>
                          db.collection("todos").doc(props.todo.id).delete()
                        }
                        color="secondary"
                      />
                    </IconButton>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon onClick={(e) => setOpen(true)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default Todo;