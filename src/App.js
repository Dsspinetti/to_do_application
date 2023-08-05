import './App.css';
import './styles.css';
import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do any additional validation or processing here before adding the todo
    onAddTodo({ title, description });
    setTitle('');
    setDescription('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};


function App() {

  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
    setShowForm(false); // Hide the form after adding the todo
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-text">To-Do Application</div>
        <button className="custom-button" onClick={() => setShowForm(true)}>
          Add New Todo
        </button>
        {showForm && <TodoForm onAddTodo={handleAddTodo} />}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
