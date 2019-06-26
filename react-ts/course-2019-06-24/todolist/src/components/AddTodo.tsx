import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StateType } from "../state/StateType";

const AddTodo = () => {
  const newTodoTitle = useSelector((state: StateType) => state.ui.newTodoTitle);

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch({
          type: "ADD_TODO",
          title: newTodoTitle
        });
      }}
    >
      <input
        value={newTodoTitle}
        onChange={event => {
          dispatch({
            type: "NEW_TITLE_CHANGED",
            title: event.target.value
          });
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
