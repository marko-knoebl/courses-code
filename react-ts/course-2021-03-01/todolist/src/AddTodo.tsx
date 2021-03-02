import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

type Props = {
  onAddTodo: (newTitle: string) => void;
};

function AddTodo(props: Props) {
  const [newTitle, setNewTitle] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.onAddTodo(newTitle);

        setNewTitle("");
      }}
    >
      <TextField
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        add
      </Button>
    </form>
  );
}

export default AddTodo;
