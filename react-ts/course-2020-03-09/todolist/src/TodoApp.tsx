import React from "react";
import TodoList from "./TodoList";

import AddTodo from "./AddTodo";
import useTodos from "./useTodos";
import Statistics from "./Statistics";

function TodoApp() {
  const todoData = useTodos();

  if (todoData.isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todoData.todos}
        onToggle={id => {
          todoData.toggleTodo(id);
        }}
        onDelete={id => {
          todoData.deleteTodo(id);
        }}
      />
      <AddTodo onAdd={todoData.addTodo} />
      <button
        onClick={() => {
          todoData.deleteAllTodo();
        }}
      >
        delete all
      </button>
      <Statistics todos={todoData.todos} />
    </div>
  );
}

export default TodoApp;
