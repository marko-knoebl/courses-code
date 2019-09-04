import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import TodoType from "../TodoType";
import AddTodo from "./AddTodo";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./About";

import "./App.css";

import todosReducer from "../state/todosReducer";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "../state/Action";
import fetchTodosAction from "../state/fetchTodosAction";

const initialState = [
  { id: 1, title: "learn React", completed: false },
  { id: 2, title: "groceries", completed: true }
];

const App: React.FC = () => {
  // const [todos, setTodos] = useState<Array<TodoType>>(initialState);

  // const [todos, todosDispatch] = useReducer(todosReducer, initialState);

  const todos = useSelector((state: Array<TodoType>) => state);
  const numTodos = useSelector((state: Array<TodoType>) => state.length);

  const dispatch: ThunkDispatch<Array<TodoType>, void, Action> = useDispatch();

  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);

  useEffect(() => {
    // wird ausgeführt, wenn die komponente eingebunden wird
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      setInstallPrompt(e);
    });
  }, []);

  useEffect(() => {
    // dispatch einer Funktion
    // ermöglicht durch thunk
    dispatch(fetchTodosAction);
  }, []);

  const handleCompleted = (id: number) => {
    dispatch({ type: "COMPLETE_TODO", id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const handleAddTodo = (title: string) => {
    dispatch({ type: "ADD_TODO", title });
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <button
        onClick={() => {
          dispatch(fetchTodosAction);
        }}
      >
        Reload
      </button>
      <p>Num Todos: {numTodos}</p>
      <div>
        <NavLink to="/" activeClassName="active-link" exact={true}>
          Home
        </NavLink>{" "}
        <NavLink to="/add" activeClassName="active-link">
          Add
        </NavLink>{" "}
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </div>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => (
            <>
              <TodoList
                todos={todos}
                onCompleted={handleCompleted}
                onDelete={handleDelete}
              />
              <button
                onClick={() => {
                  dispatch({ type: "DELETE_ALL_COMPLETED" });
                }}
              >
                delete all completed
              </button>
            </>
          )}
        />
        <Route
          path="/add"
          exact={true}
          render={() => <AddTodo onAddTodo={handleAddTodo} />}
        />
        <Route path="/about" exact={true} component={About} />

        <Route path="/home" exact={true} render={() => <Redirect to="/" />} />
        <Route
          path="/add-todo"
          exact={true}
          render={() => <Redirect to="/add" />}
        />

        <Route path="/" render={() => <h2>Not Found</h2>} />
      </Switch>
      {installPrompt && (
        <div>
          <button
            onClick={() => {
              (installPrompt as any).prompt();
              (installPrompt as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === "accepted") {
                  console.log("user accepted");
                } else {
                  console.log("user dismissed");
                }
                setInstallPrompt(null);
              });
            }}
          >
            install
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
