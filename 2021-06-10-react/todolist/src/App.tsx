import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { NavLink, Routes, Route } from "react-router-dom";
import AboutView from "./AboutView";
import useTodos from "./useTodos";
import { useState } from "react";
import ThemeContext, { Theme } from "./ThemeContext";

function App() {
  const { todos, isLoading, addTodo, setTodoCompleted, deleteTodo, loadTodos } =
    useTodos();

  const [theme, setTheme] = useState<Theme>("default");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <nav>
          <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Todo</h1>
                <div>
                  <button onClick={loadTodos}>load todos from API</button>
                  {isLoading ? "Loading ..." : null}
                </div>
                <AddTodo onAddTodo={(title) => addTodo(title)} />
                <TodoList
                  todos={todos}
                  onCompletedChange={setTodoCompleted}
                  onDelete={deleteTodo}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutView />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
