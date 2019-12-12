import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TodoApp.css";

import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";
import { loadTodos } from "./state/actions";

function TodoApp() {
  const dispatch = useDispatch();
  const addTodoFormVisible = useSelector(
    state => state.uiData.addTodoFormVisible
  );

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoListContainer />
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
    </div>
  );
}

export default TodoApp;
