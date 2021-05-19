import { useState } from "react";
import { AppBar, Button } from "@material-ui/core";
import { Theme } from "./types";
import AddTodo from "./AddTodoCls";
import TodoList from "./TodoList";
import AboutView from "./AboutView";
import { NavLink, Route, Routes } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useTodos } from "./useTodos";

function App() {

  const {
    todos,
    isLoading,
    addTodo,
    toggleTodo,
    deleteTodo,
    loadTodosAsync,
  } = useTodos()

  // theme

  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ backgroundColor: theme === "light" ? "#eee" : "#666" }}>
        <AppBar position="static">
          <h1>Todo</h1>
        </AppBar>

        <nav>
          <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>
                  <Button variant="contained" onClick={loadTodosAsync}>
                    load from API
                  </Button>
                  {isLoading ? <div>Loading...</div> : null}
                </div>
                <TodoList
                  todos={todos}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
                <AddTodo onAddTodo={addTodo} />
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
