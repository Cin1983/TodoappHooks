import React, { useState,useEffect } from "react";
import TodoList from "./Components/TodoList";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dates from "./Components/Dates.json";
import "./App.css";


function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [value, setValue] = useState(new Date());
  const [isHidden, setIsHidden] = useState(true);
  //RUN ONCE with
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }, );
  // // FUNCTIONS

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to Local
  // const saveLocalTodos = () => {
  //   localStorage.setitem("todos", JSON.stringify(todos));
  // };
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todoLocal);
  //   }
  // };

  const formatDate = (date) => {
    
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  //  handlers
  const onChange = (date) => {
    setValue(date);
  };

  const clickHandler = (date) => {
    if (formatDate(date) === formatDate(value)) setIsHidden(!setIsHidden);
  };

  return (
    <div className="App">
      <header>
        <h1>Hyacinthia's To do App!</h1>
      </header>
      
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        isHidden={isHidden}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      
      <Calendar
        onChange={onChange}
        value={value}
        
        tileContent={({ date }) => {
          for (let i = 0; i < Dates.length; i++)
            if (
              `${
                date.getMonth() + 1
              }-${date.getDate()}-${date.getFullYear()}` === Dates[i].date
            ) {
              return Dates[i].name;
            }
        }}
        tileClassName={({ date }) => {
          for (let i = 0; i < Dates.length; i++)
            if (
              Dates[i].date ===
              `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
            ) {
              return "color";
            }
        }}
        onClickDay={clickHandler}
      />
    </div>
  );
}

export default App;

