/*
props:

events:
- onAddTodo
state:
- newTitle
*/

import { Button } from "@material-ui/core";
import { FormEvent, useEffect, useRef, useState } from "react";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

export default function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");

  const inputEl = useRef<null | HTMLInputElement>(null);

  function focusInput() {
    inputEl.current?.focus();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    props.onAddTodo(newTitle);
    setNewTitle("");
    focusInput();
  }

  useEffect(focusInput, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
        ref={inputEl}
      />
      <Button type="submit">add</Button>

      <button type="button" onClick={() => inputEl.current?.focus()}>
        set focus
      </button>
      <button type="button" onClick={() => inputEl.current?.blur()}>
        unfocus
      </button>
    </form>
  );
}
