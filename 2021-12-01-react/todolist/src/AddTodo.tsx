import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    props.onAddTodo(newTitle);
    navigate("/");
  }

  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, [])

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        new title:
        <input
          ref={inputEl}
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </label>
      <Button type="submit" variant="primary" className="ms-2">
        add
      </Button>
    </form>
  );
}

export default AddTodo;
