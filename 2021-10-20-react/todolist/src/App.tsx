import React, { useEffect, useState } from "react";
import "./App.css";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function App() {
  // Todo management

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function changeTodo(id: number, todo: Partial<Todo>) {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, ...todo };
        }
        return t;
      })
    );
  }

  function changeTodoStatus() {}

  function removeTodo(id: number) {}

  async function loadTodos() {
    const newTodos = await fetchTodos();
    setTodos(newTodos);
  }

  // useEffect(() => {
  //   loadTodos();
  // }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={() => loadTodos()}>load from API</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={(id, todo) => changeTodo(id, todo)}
            onDelete={(id) => removeTodo(id)}
          />
        ))}
      </ul>
      <AddTodo
        onAdd={(title) => {
          addTodo(title);
        }}
      />
    </div>
  );
}

export default App;
