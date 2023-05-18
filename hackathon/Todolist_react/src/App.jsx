import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import Total from "./components/Total";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edits, setEdit] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h1>TODOLIST APP</h1>
        <Form
          input={input}
          setInput={setInput}
          todo={todos}
          setTodo={setTodos}
        />
        <Todolist
          todo={todos}
          setTodo={setTodos}
          edit={edits}
          setEdit={setEdit}
        />
        <Total />
      </div>
    </div>
  );
}

export default App;
