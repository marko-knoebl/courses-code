// AddTodo-Komponente
// TodoItem-Komponente

import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

const initialTodos: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  }

  async function loadTodos() {
    const todos = await fetchTodos();
    setTodos(todos);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo</h1>
      <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <button onClick={() => loadTodos()}>load from API</button>
              </div>
              <ul>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChangeCompleted={(id, completed) =>
                      changeCompleted(id, completed)
                    }
                    onDelete={(id) => deleteTodo(id)}
                  />
                ))}
              </ul>
              <AddTodo
                onAddTodo={(title) => {
                  if (title.length !== 0) {
                    addTodo(title);
                  }
                }}
              />
            </div>
          }
        />
        <Route path="/about" element={<div>Todo App by Marko</div>} />
      </Routes>
    </div>
  );
}
