import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

function AddTodoView(props: AddTodoProps) {
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    props.onAddTodo(newTitle);
    setNewTitle("");
    navigate("/");
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        title:
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </label>
      <Button type="submit" variant="primary">
        add
      </Button>
    </form>
  );
}

export default AddTodoView;
