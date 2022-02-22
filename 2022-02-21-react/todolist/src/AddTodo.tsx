import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AddTodoProps = {
  onAdd: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState<string>("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAdd(newTitle);
    setNewTitle("");
    navigate("/");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <Button color="primary" variant="contained" type="submit">
        Add
      </Button>
    </form>
  );
}

export default AddTodo;
