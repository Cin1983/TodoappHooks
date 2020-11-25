import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Todoapp from "./Components/Todoapp";
import Form from "./Components/Form";
import Data from "./Components/Dates.json";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
 
  return (
    <div className="App">
      <header>
        <h1>Hyacinthia's To do App!</h1>
      </header>

      <Calendar
        // 
        o

      
      tileContent={({ date }) => {for (let i = 0; i < Dagen.length; i++) if(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` === Dagen[i].date ){return Dagen[i].name;}}}
      tileClassName={({ date }) => {for (let i = 0; i < Dagen.length; i++) if(Dagen[i].date === `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`){return "color";}}}


      />
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}/>
      
      <Todoapp todos={todos} />
    </div>
  )}

export default App;
