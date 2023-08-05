import './App.css';
import './styles.css';
import React, { useState, useEffect } from 'react';



// const RemoveTodo = () => {
//   return (
//     <button className="delete-todo-button">Remove to-do</button>
//   );
// };

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
  

  // Load todos from local storage on application startup
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the data returned from the backend after adding the todo
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <header className="App-header-text">To-Do Application</header>
        <button className="add-todo-button" onClick={() => setShowForm(true)}>
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