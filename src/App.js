
import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";

function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE with
  useEffect(() => {
    getLocalTodos();
  }, []);
  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to Local
  const saveLocalTodos = () => {
    localStorage.setitem("todos", JSON.stringify(todos));
      
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
      return (
        <div className="App">
          <header>
            <h1>Hyacinthia's To do App!</h1>
          </header>
          <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
          
          <Calendar />
        </div>
      );
    }
  }
}
  export default App;