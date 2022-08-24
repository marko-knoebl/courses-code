// State: title
// Props:
// Events: onAdd

import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function AddTodo(props: Props) {
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
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <button>add todo</button>
    </form>
  );
}
