// state: newTitle
// props:
// events: onAdd

import { useEffect, useRef, useState } from "react";

type AddTodoProps = {
  onAdd: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // setze fokus auf das input-Element
    inputRef.current?.focus();
  }, []);

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
        ref={inputRef}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTodo;
