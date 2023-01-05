import React, { useState } from "react";
import "./App.css"

const toDos = [
  { title: 'take the trash', id: 1, completed: true },
  { title: 'learn React', id: 2, completed: false },
];

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([...toDos]);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    setTodo([...todo, {title: input, id: Math.floor(Math.random() * 100), completed: false}])
    setInput('');
  }

  const handleCheckbox = (id) => {
    const updatedTodo = [...todo];
    const found = updatedTodo.map(item => item.id === id ? {...item, completed: !item.completed} : item);
    setTodo([...found])
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Add to-do</button>
      </form>
      <ul>
        {todo.map(item => (
          <li key={item.id}>
            <input type="checkbox" checked={item.completed} onClick={() => handleCheckbox(item.id)}/>
            <span className={item.completed ? "completed" : ""}>{item.title}</span>
          </li>)
        )}
      </ul>
    </div>
  );
}

export default App;
