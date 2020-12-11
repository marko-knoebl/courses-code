/*
props / events:

- onAdd("new-title")

state:

- newTitle
*/

import { useState } from "react";

function AddTodo(props) {
  const [newTitle, setNewTitle] = useState("");

  return (
    <form
      onSubmit={(event) => {
        // prevent default behavior
        event.preventDefault();
        props.onAdd(newTitle);
        setNewTitle("");
      }}
    >
      <input
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      />
      <button disabled={newTitle.length === 0}>add</button>
      <div>length: {newTitle.length}</div>
    </form>
  );
}

export default AddTodo;
