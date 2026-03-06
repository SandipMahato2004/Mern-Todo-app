import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post(
      "http://localhost:5000/api/todos",
      { text },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
  };

  useEffect(() => {
    if (token) fetchTodos();
  }, [token]);

  if (!token) {
    return (
      <div>
        <h2>Login</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        placeholder="Add Todo"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo._id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default App;