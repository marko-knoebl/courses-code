import React, { useState, FC } from "react";
import { TextField } from "@material-ui/core";

type AddTodoProps = {
  onAddTodo: (newTitle: string) => void;
};

const AddTodo: FC<AddTodoProps> = props => {
  const [newTitle, setNewTitle] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddTodo(newTitle);
    setNewTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={newTitle.length === 0}
        helperText={newTitle.length === 0 ? "title cannot be empty" : ""}
        value={newTitle}
        onChange={event => {
          setNewTitle(event.target.value);
        }}
        label="title"
      />
      <button disabled={newTitle.length === 0}>add</button>
    </form>
  );
};

export default AddTodo;
