import React from "react";

import styles from "./TodoItem.module.css";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  if (!todo || !todo.title) {
    throw new Error("invalid / missing prop 'todo'");
  }
  const classNames = [styles.todoItem];
  if (todo.completed) {
    classNames.push(styles.completed);
  }
  const className = classNames.join(" ");
  return (
    <div className={className} onClick={() => toggleTodo(todo.id)}>
      {todo.completed ? "DONE: " : "TODO: "}{todo.title}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
