import { NavLink, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import useTodos from "./useTodos";

export default function App() {
  const { todos, addTodo, changeCompleted, deleteTodo, loadTodos } = useTodos();

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
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}
