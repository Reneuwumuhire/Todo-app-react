import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import moment from 'moment'
function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(
        snapshot
          .docs
          .map(doc =>
            ({
              id: doc.id,
              todo: doc.data().todo,
              timestamp: moment(doc.data().timestamp.toDate().toString()).calendar()
            }
            )
          )
      )
    });

  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <div className="top__section">
        <h2>What do you have to do Today </h2>
        <form className="new__todo">
          <FormControl className="todo__form" >
            <InputLabel className="form__label">Add new todo</InputLabel>
            <Input className="form__input" value={input} onChange={event => setInput(event.target.value)} />
            <Button className="form__button" disabled={!input} variant="contained" color="secondary" type="submit" onClick={addTodo}>Add To Do</Button>

          </FormControl>
        </form>
      </div>

      <div className="down__section">
        <ul className="list__todo">
          {todos.map(todo => (
            <Todo key={todo.id} id={todo.id} todo={todo} timestamp={todo.timestamp} />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
