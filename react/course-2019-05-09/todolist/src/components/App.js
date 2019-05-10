import React from "react";
import "./App.css";
import AddTodoContainer from "../containers/AddTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
