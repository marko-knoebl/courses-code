import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  return (
    <form
      onSubmit={event => {
        // Standardverhalten des Events verhindern
        // (kein Übermitteln der Formularinhalte an den Server)
        event.preventDefault();
        onAddTodo(title);
        setTitle("");
        setShouldRedirect(true);
      }}
    >
      <TextField
        label="Todo..."
        value={title}
        onChange={event => {
          setTitle(event.target.value);
        }}
        margin="dense"
      />
      <Button type="submit" color="primary" variant="contained">
        Add
      </Button>
      {
        shouldRedirect && <Redirect to="/" />
      }
    </form>
  );
};

export default AddTodo;
