import { useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div className="app">
      <div className="app-header">
        <h1>My To-Do List</h1>
        <p>Stay organized and productive</p>
      </div>
      <main className="app-main">
        <div className="todo-container">
          <div className="todo-input-group">
            <input
              type="text"
              className="todo-input"
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            />
            <button className="btn-add" onClick={addTodo}>
              Add
            </button>
          </div>
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No todos yet. Add one to get started! 🚀</p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`todo-item ${
                    todo.completed ? "completed" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="todo-checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button
                    className="btn-delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;