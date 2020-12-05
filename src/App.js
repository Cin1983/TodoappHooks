import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
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
                    
  //RUN ONCE with
  useEffect(() => {
    getLocalTodos();
  }, [])
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
  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setitem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  const [value, onChange] = useState(new Date());
  // const formatDate = (date) => {
  //   return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  // }

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

        <Calendar
          
          onChange={onChange}
          value={value}
         
          tileContent={({ date }) => { for (let i = 0; i < Dates.length; i++) if (`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}` === Dates[i].date) { return Dates[i].name; } }}
          tileClassName={({ date }) => { for (let i = 0; i < Dates.length; i++) if (Dates[i].date === `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`) { return "color"; } }}
        // tileClassName={({ date }) => date.getDate() === 3 ? 'color' : null}
        // tileContent={({ date }) => date.getDate() === 6 ?  <p>It's Sunday!</p> : null}
    //     const [value, onChange] = useState(new Date());
    // const formatDate = (date) => {
    // return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
        />
           
      </div>
    );
  }


export default App;
  

//  onChange={onChange}
      //   value={value}


      //   tileContent={({ date }) => { for (let i = 0; i < Dates.length; i++) if (`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}` === Dates[i].date) { return Dates[i].name; } }}
  
      //   tileClassName={({ date }) => { for (let i = 0; i < Dates.length; i++) if (Dates[i].date === `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`) { return "color"; } }}

      //  */ }

      // onChange={onChange}
// value={value}
// tileContent={({ date }) => { for (let i = 0; i < Dates.length; i++) if (`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}` === Dates[i].date) { return Dates[i].name; } }}
// tileClassName={({ date }) => { for (let i = 0; i < Dates.length; i++) if (Dates[i].date === `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`) { return "color"; } }}


// import Dates from "./src/Dates.json";
//
          // tileClassName={({ date }) => {
          //   for (let i = 0; i < Dates.length; i++)
          //   if (`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}` === Dates[i].date) { return Dates[i].name; } }}
          // tileClassName={({ date }) => {() === Dates[i].date ? ' saturday' : null