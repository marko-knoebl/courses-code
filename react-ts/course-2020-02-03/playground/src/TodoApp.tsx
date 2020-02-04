import styles from "./TodoApp.module.css";
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "learn React",
      completed: false
    },
    {
      id: 2,
      title: "groceries",
      completed: true
    }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const handleClick = (todoId: number) => {
    todos[0].completed = true;
    setTodos(todos.slice());
    const newTodos = todos.map(t =>
      t.id === todoId ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };
  return (
    <div>
      <h2>Todo</h2>
      <ul>
        {todos.map(todo => (
          <li
            d-completed={todo.completed ? "true" : "false"}
            key={todo.id}
            onClick={() => {
              handleClick(todo.id);
            }}
            className={todo.completed ? styles.todoitem : styles.todoitem}
          >
            {todo.completed ? "DONE: " : "TODO: "}
            {todo.title}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault();
          todos.push({
            id: todos.length + 1,
            title: newTitle,
            completed: false
          });
          setTodos(todos);
          //setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={event => {
            setNewTitle(event.target.value);
          }}
        />
        <button disabled={newTitle.length === 0}>add</button>
      </form>
    </div>
  );
};

export default TodoApp;
