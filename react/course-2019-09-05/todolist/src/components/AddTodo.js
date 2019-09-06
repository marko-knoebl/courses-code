import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function AddTodo() {
  const dispatch = useDispatch();
  const newTitle = useSelector(state => state.newTitle);
  const newTitleChanged = useSelector(state => state.newTitleChanged);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const isValid = newTitle.length > 0;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch({
          type: "ADD_TODO",
          title: newTitle
        });
        setShouldRedirect(true);
      }}
    >
      <input
        value={newTitle}
        onChange={event => {
          dispatch({ type: "SET_NEW_TITLE", text: event.target.value });
        }}
      />
      <button disabled={!isValid}>add</button>
      {!isValid && newTitleChanged && <div>title must not be blank</div>}
      {shouldRedirect && <Redirect to="/" />}
    </form>
  );
}

export default AddTodo;
