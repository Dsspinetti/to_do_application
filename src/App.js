import './App.css';
import './styles.css';
import React, { useState } from 'react';

const AddTodo = () => {
  return (
    <button className="add-todo-button">Add to-do</button>
  );
};
const RemoveTodo = () => {
  return (
    <button className="delete-todo-button">Remove to-do</button>
  );
};



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <header className = "App-header-text">To-Do Application</header>
      <AddTodo/>
      <RemoveTodo />
      </header>
    </div>
  );
}

export default App;
