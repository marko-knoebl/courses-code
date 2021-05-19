import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

type AddTodoProps = {
  onAddTodo: (newTitle: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState<string>("");

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onAddTodo(newTitle);
    setNewTitle("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <TextField
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
        <Button type="submit" color="primary" variant="contained">
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddTodo;
