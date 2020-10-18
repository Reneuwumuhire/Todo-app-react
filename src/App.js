import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import moment from 'moment';
import Notodo from './Notodo';
function App() {



  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(
        snapshot
          .docs
          .map(doc => {
            return {
              ...doc.data(),
              todo: doc.data().todo,

              timestamp: !doc.data().timestamp ? "" : doc.data().timestamp.toDate().toLocaleString()

            }
          }

          )
    )})

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
            <TextareaAutosize className="form__input" rowsMin={2} value={input} onChange={event => setInput(event.target.value)} />
            <Button className="form__button" disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add To Do</Button>
          </FormControl>
        </form>
      </div>

      <div className="down__section">
        <ul className="list__todo">
          {(todos.length !== 0) ? (todos.map(todo => <Todo key={todo.id} id={todo.id} todo={todo} timestamp={todo.timestamp} />)) : <Notodo />}
        </ul>
      </div>

    </div>
  );
}

export default App;
