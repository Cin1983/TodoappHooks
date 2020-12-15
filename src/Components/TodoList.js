import React from "react";
import Todo from "./Todo";
import Form from "./Form";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  isHidden,
  inputText,
  setInputText,
  setStatus,
}) => {
  return (
    <>
      <div className={`Todo-container ${isHidden ? "" : "showing"}`}>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          isHidden={isHidden}
        />

        {/* <ul className="todo-list"> */}
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        {/* </ul> */}
      </div>
    </>
  );
};

export default TodoList;
