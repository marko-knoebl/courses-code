import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ThemeContext from "./ThemeContext";

type AddTodoProps = {
  onAdd: (newTitle: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const theme = useContext(ThemeContext);
  const [newTitle, setNewTitle] = useState("");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.onAdd(newTitle);
        setNewTitle("");
      }}
    >
      <TextField
        value={newTitle}
        onChange={event => setNewTitle(event.target.value)}
        label="new title"
      />
      <Button
        color={theme === "fancy" ? "secondary" : "primary"}
        variant="contained"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
}

export default AddTodo;
