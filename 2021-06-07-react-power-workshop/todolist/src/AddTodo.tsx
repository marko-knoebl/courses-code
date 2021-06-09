import { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";

type AddTodoProps = {
  onAddition: (newTitle: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddition(newTitle);
    setNewTitle("");
  };

  const newTitleInputRef = useRef<HTMLElement>();

  useEffect(() => {
    newTitleInputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={newTitleInputRef as any}
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <Button type="submit" variant="contained">
        add
      </Button>
    </form>
  );
}

export default AddTodo;
