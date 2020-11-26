import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Todoapp from "./Components/Todoapp";
import Form from "./Components/Form";
// import Dates from "./src/Dates.json";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // const [value, onChange] = useState(new Date());

  // const formatDate = (date) => { return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`; };

  return (
    <div className="App">
      <header>
        <h1>Hyacinthia's To do App!</h1>
      </header>
      

      <Calendar />
      
      {/* //   onChange={onChange}
      //   value={value}


      //   tileContent={({ date }) => { for (let i = 0; i < Dates.length; i++) if (`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}` === Dates[i].date) { return Dates[i].name; } }}
  
      //   tileClassName={({ date }) => { for (let i = 0; i < Dates.length; i++) if (Dates[i].date === `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`) { return "color"; } }}

      //  */}
      
      
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      />
      <Todoapp todos={todos} />
    
    </div>
  )}
export default App;

      

