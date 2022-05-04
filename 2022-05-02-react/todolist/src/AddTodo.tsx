// state: newTitle
// props:
// events: onAdd

import { useState } from "react";

type AddTodoProps = {
  onAdd: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onAdd(newTitle);
        setNewTitle("");
      }}
    >
      <input
        type="text"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTodo;
