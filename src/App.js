import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Todoapp from "./Components/Todoapp";
import Form from "./Components/Form";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Hyacinthia's To do App!</h1>
      </header>

      <Calendar />
      <Form setInputText={setInputText} />
      <Todoapp />
   
   
    </div>
  )}

export default App;
