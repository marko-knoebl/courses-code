import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { StateType } from "../state/StateType";
import "./App.css";
import About from "./About";
import { Route, Switch, Redirect } from "react-router";
import { NavLink } from "react-router-dom";

const App: React.FC = () => {
  const numTodos = useSelector((state: StateType) => state.todos.length);
  const todos = useSelector((state: StateType) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Todo</h2>

      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/stats">Stats</NavLink>
      </nav>

      <div>
        <button
          onClick={() => {
            dispatch(() => {
              // dispatchen einer Funktion (eines sog. "thunks")
              // diese Funktion kann asynchrone actions ausführen
              // und weitere Redux-Actions dispatchen

              // 1. action "LOAD_TODOS_REQUEST" dispatchen
              // 2. todos von einem API abfragen
              // 3. wenn todos erhalten werden, action "LOAD_TODOS_SUCCESS" dispatchen
              dispatch({ type: "LOAD_TODOS_REQUEST" });
              fetch("https://jsonplaceholder.typicode.com/todos")
                .then(result => result.json())
                .then(result => {
                  dispatch({ type: "LOAD_TODOS_SUCCESS", todos: result });
                });
            });
          }}
        >
          load from API
        </button>
      </div>

      <Switch>
        <Route
          path="/stats"
          exact={true}
          render={() => <p>Number of todos: {numTodos}</p>}
        />
        <Route
          path="/"
          exact={true}
          render={() => (
            <>
              <TodoList
                todos={todos}
                toggleTodo={id => {
                  dispatch({ type: "TOGGLE_TODO", id: id });
                }}
                deleteTodo={id => {
                  dispatch({ type: "DELETE_TODO", id: id });
                }}
              />
              <button
                onClick={() => {
                  dispatch({ type: "DELETE_ALL_COMPLETED" });
                }}
              >
                Delete All Completed
              </button>
              <AddTodo />
            </>
          )}
        />
        <Route path="/about" exact={true} sensitive={true} component={About} />
        <Route
          path="/home"
          exact={true}
          render={props => <Redirect to="/" />}
        />
        <Route path="/" render={() => <h3>Not found</h3>} />
      </Switch>
    </div>
  );
};

export default App;
