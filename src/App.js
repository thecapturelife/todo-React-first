import React, { useRef, useState } from 'react';
import './App.css';


function App() {
  const [toDo, setToDo] = useState('');
  const [todos, setTodos] = useState([]);
  const reff = useRef(null);

  const handleClick = () => {
    const inputRefValue = reff.current.value;
    setTodos([...todos, inputRefValue]);
    setToDo('');
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); 
    setTodos(updatedTodos);
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Keep going despite challenges.</h2>
      </div>
      <div className="input">
        <input
          ref={reff}
          type="text"
          placeholder="🖊️ Add item..."
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <i onClick={handleClick} className="fas fa-plus"></i>
        
      </div><br /><br />
      <hr /><br />
      <div className="todos">
        {todos.map((item, index) => (
          <div className="input"  key={index}>
            <input  value={item}/>
            <i onClick={handleDelete} className="fas fa-trash"></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
