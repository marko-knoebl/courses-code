import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
