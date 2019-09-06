import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import About from "./About";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { fetchTodos } from "../state/actions";

function App() {
  const numTodos = useSelector(state => state.todos.length);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo</h1>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <Switch>
        <Route path="/add" exact={true} component={AddTodo} />

        <Route
          path="/"
          exact={true}
          render={() => {
            return (
              <>
                <TodoList />
                <div>Number of todos: {numTodos}</div>
                <button
                  onClick={() => {
                    dispatch({ type: "DELETE_COMPLETED_TODOS" });
                  }}
                >
                  delete completed
                </button>
                <button
                  onClick={() => {
                    const fetchTodosAction = fetchTodos();
                    dispatch(fetchTodosAction);
                  }}
                >
                  load from API
                </button>
              </>
            );
          }}
        />

        <Route path="/about" exact={true} component={About} />

        <Route path="/home" render={props => <Redirect to="/" />} />
        <Route path="/add-todo" render={props => <Redirect to="/add" />} />

        <Route path="/" render={() => <h2>Not Found</h2>} />
      </Switch>
    </div>
  );
}

export default App;
