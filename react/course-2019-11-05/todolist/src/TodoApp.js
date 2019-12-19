import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, NavLink, Redirect } from "react-router-dom";

import "./TodoApp.css";

import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";
import { loadTodos } from "./state/actions";
import About from "./About";
import Stats from "./Stats";
import TodoDetails from "./TodoDetails";

function TodoApp() {
  const dispatch = useDispatch();
  const addTodoFormVisible = useSelector(
    state => state.uiData.addTodoFormVisible
  );

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/stats">Stats</NavLink>
      </div>
      <Route path="/about" exact={true} component={About} />
      <Route path="/" exact={true} component={TodoListContainer} />
      <Route path="/home" exact={true} render={() => <Redirect to="/" />} />
      <Route
        path="/"
        exact={true}
        render={() => (
          <>
            <div>
              <button onClick={() => dispatch({ type: "DELETE_COMPLETED" })}>
                delete completed todos
              </button>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "SET_ADD_FORM_VISIBLE",
                  visible: !addTodoFormVisible
                })
              }
            >
              {addTodoFormVisible ? "hide form" : "show form"}
            </button>
            {addTodoFormVisible ? <AddTodo /> : null}
            <div>
              <button
                onClick={() => {
                  // dispatch a thunk action
                  dispatch(loadTodos);
                }}
              >
                load todos from API
              </button>
            </div>
          </>
        )}
      />
      <Route path="/stats" exact={true} component={Stats} />
      <Route
        path="/todo/:todoId"
        render={props => {
          const todoId = props.match.params.todoId;
          return <TodoDetails todoId={todoId} />;
        }}
      />
    </div>
  );
}

export default TodoApp;
