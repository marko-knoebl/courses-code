import React, { useState, useEffect } from "react";

import styles from "./TodoList.module.css";

const initialTodos = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false }
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    console.log("Todolist included / state updated");
    if (shouldReload) {
      console.log("refetching todos")
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todos => {
          setTodos(todos);
          setShouldReload(false);
        });
    }
  }, [shouldReload]);

  return (
    <div>
      <button onClick={() => setShouldReload(true)}>reload</button>
      <ul className={styles.todolist}>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`${styles.todo} ${
              todo.completed ? styles.completed : ""
            }`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*function TodoListForloop() {
  const elements = [];
  for (let todo of initialTodos) {
    elements.push(<li>{todo.title}</li>);
  }
  return <ul>{elements}</ul>;
}*/

export default TodoList;
