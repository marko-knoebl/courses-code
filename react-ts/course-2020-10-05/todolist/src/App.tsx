import React, { useState, useRef, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import StatsRoute from "./routes/stats/StatsRoute";
import AboutRoute from "./routes/about/AboutRoute";
import MainRoute from "./routes/main/MainRoute";
import ThemeContext from "./ThemeContext";
import DocumentTitle from "./components/DocumentTitle";
import useTodos from "./useTodos";

function App() {
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodos();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [canInstall, setCanInstall] = useState(false);
  const installPromptEventRef = useRef<Event>();

  const getInstallPermission = () => {
    window.addEventListener("beforeinstallprompt", (ipEvent) => {
      ipEvent.preventDefault();
      installPromptEventRef.current = ipEvent;
      setCanInstall(true);
    });
  };
  useEffect(getInstallPermission, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "grey" }}
    >
      <DocumentTitle value={`Todo (${todos.length})`} />
      <AppBar position="static">
        <h1>Todo</h1>
      </AppBar>
      <div>
        <button
          disabled={!canInstall}
          onClick={() => {
            (installPromptEventRef.current as any).prompt();
          }}
        >
          install
        </button>
      </div>
      <div>
        <button onClick={() => setTheme("light")}>light</button>{" "}
        <button onClick={() => setTheme("dark")}>dark</button>
      </div>
      <div>
        <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>{" "}
        <NavLink to="/stats">stats</NavLink>
      </div>
      <ThemeContext.Provider value={theme}>
        <Switch>
          <Route path="/stats">
            <StatsRoute todos={todos} />
          </Route>
          <Route path="/about">
            <AboutRoute />
          </Route>
          <Route path="/" exact={true}>
            <MainRoute
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onAdd={addTodo}
            />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
