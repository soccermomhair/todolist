import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [task, setTask] = useState('');
  const [tlist, setTlist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      return;
    }
    const newTask = {
      assignment: task,
      completed: false
    }
    setTlist([...tlist, newTask]);

    setTask("");
  }

  const deleteItem = (delIdx) => {
    setTlist(tlist.filter((task, index) =>
      index !== delIdx));
  }

  const handleCheckbox = (index) => {
    const updatedlist = tlist.map((task, idx) => {
      if (idx === index) {
        task.completed = !task.completed;
        // const updatedlist = { ...task, completed: !task.completed };
      }

      return task;
    });
    setTlist(updatedlist);
  }

  return (
    <div>
      <form onSubmit={(event) => { handleSubmit(event) }}>
        <div>
          <label htmlFor="assignment">Enter your task:</label>
          <input type="text" id="assignment" name="assignment" value={task} onChange={(event) => { setTask(event.target.value) }} />
        </div>

        <button>Submit</button>
      </form>


      {
        tlist.map((task, index) => (

          <div key={index}>
            <span>{task.assignment}</span>
            <input type="checkbox" checked={task.completed} onChange={(event) =>
              handleCheckbox(index)} />
            <button onClick={(event) => { deleteItem(index) }}>Delete</button>
          </div>
        ))}
    </div>

  )

}


export default App;