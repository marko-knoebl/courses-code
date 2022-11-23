import { useState } from "react";
// state
// - newTitle

// props

// events
// - onAddTodo

interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

export default function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onAddTodo(newTitle);
        // addTodo(newTitle);
      }}
    >
      title:
      <input
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}
