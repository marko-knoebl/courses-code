import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (newTitle) {
          dispatch({
            type: "ADD_TODO",
            title: newTitle
          });
          setNewTitle("");
        }
      }}
    >
      <input
        value={newTitle}
        onChange={event => setNewTitle(event.target.value)}
      />
      <button disabled={newTitle.length === 0}>add</button>
    </form>
  );
}

export default AddTodo;
