import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [newTitle, setNewTitle] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (newTitle) {
          addTodo(newTitle);
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
