import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Go to the super market']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
        <form>
          <FormControl>
            <InputLabel>Write a task...</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
          </FormControl>
          <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Task
          </Button>
        </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
