import "./App.css";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import LoadingIndicator from "./LoadingIndicator";
import { Routes, Route, NavLink } from "react-router-dom";
import useTodos from "./useTodos";

export default function App() {
  const { todos, addTodo, changeTodoStatus, removeTodo, isLoading } =
    useTodos();

  return (
    <div className="App">
      <h1>Todo</h1>
      <NavLink to="/">home</NavLink> <NavLink to="/add">add</NavLink>{" "}
      <NavLink to="/about">about</NavLink>
      <Routes>
        <Route path="/about" element={<div>Todo app by Marko</div>} />
        <Route
          path="/"
          element={
            <div>
              {isLoading ? <LoadingIndicator /> : null}
              <ul>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    item={todo}
                    onStatusChange={(status) =>
                      changeTodoStatus(todo.id, status)
                    }
                    onRemove={() => removeTodo(todo.id)}
                  />
                ))}
              </ul>
            </div>
          }
        />
        <Route
          path="/add"
          element={<AddTodo onAddTodo={(newTitle) => addTodo(newTitle)} />}
        />
      </Routes>
    </div>
  );
}
