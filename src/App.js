import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from "./Todo"

function App() {

  const [todos, setTodos] = useState(['Go for Practice', 'Practice makes perfect']);
  const [input, setInput] = useState('');
  console.log(input);
  const addTodo = event => {
            event.preventDefault(); //will stop the refresh
             console.log('I am Working');
            setTodos([...todos, input]); //assign the value on fresh view
            setInput(''); //empty the input bar after clicking the add Todo Bar
  }
  return (
    <div className="App">
      <h1> Himanshu Kumar </h1>
      <form>
      <FormControl>
      <InputLabel> Write A Todo </InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
      Add TODO
       </Button>
       </form>
      <ul>
        {todos.map(todo => (   //map the value that assign todos variable
          <Todo text={todo}/>
         // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
