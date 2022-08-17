import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import MyNavLink from "./MyNavLink";
import Statistics from "./Statistics";
import { ThemeContext } from "./ThemeContext";
import { useTodos } from "./useTodos";

function App() {
  // option 1
  //const todoData = useTodos();
  // option 2
  const { todos, deleteTodo, addTodo, setTodoCompleted, apiStatus, loadTodos } =
    useTodos();

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      <div className="App">
        <h1>Todo</h1>
        <div>
          <MyNavLink to="/">home</MyNavLink>{" "}
          <MyNavLink to="/stats">statistics</MyNavLink>{" "}
          <MyNavLink to="/about">about</MyNavLink>{" "}
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                todos={todos}
                apiStatus={apiStatus}
                onAddTodo={addTodo}
                onDeleteTodo={deleteTodo}
                onSetTodoCompleted={setTodoCompleted}
                onLoadTodos={loadTodos}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Statistics todos={todos} />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
