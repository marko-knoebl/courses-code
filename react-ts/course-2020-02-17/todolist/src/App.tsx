import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { AppBar } from "@material-ui/core";
import { Todo } from "./Todo";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import About from "./About";
import todosReducer from "./todosReducer";
import ThemeContext from "./ThemeContext";
import { Route, NavLink, Switch } from "react-router-dom";
import Stats from "./Stats";
import NotFound from "./NotFound";

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false }
];

function App() {
  //const [todos, setTodos] = useState(initialTodos);
  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      // wait for response
      .then(res => res.json())
      // wait for JSON parsing
      .then(apiTodos => {
        todosDispatch({ type: "LOAD_TODOS", payload: apiTodos });
      });
  }, []);
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={theme}>
      <NavLink to="/">Home</NavLink> <NavLink to="/stats">Stats</NavLink>{" "}
      <NavLink to="/about">About</NavLink>
      <Switch>
        <Route path="/about" exact={true} component={About} />
        <Route
          path="/"
          exact={true}
          render={() => (
            <div>
              <button onClick={() => setTheme("default")}>default theme</button>
              <button onClick={() => setTheme("fancy")}>fancy theme</button>
              <AppBar position="static">
                <h2>Todo</h2>
              </AppBar>
              <TodoList
                todos={todos}
                onToggle={id => {
                  todosDispatch({ type: "TOGGLE_TODO", payload: id });
                }}
              />
              <AddTodo
                onAdd={newTitle => {
                  todosDispatch({ type: "ADD_TODO", payload: newTitle });
                }}
              />
            </div>
          )}
        />
        <Route
          path="/stats"
          exact={true}
          render={() => <Stats todos={todos} />}
        />
        <Route path="/" component={NotFound} />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
