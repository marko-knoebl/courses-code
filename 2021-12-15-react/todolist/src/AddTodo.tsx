import { useState } from "react";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState<string>("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    props.onAddTodo(newTitle);
    setNewTitle("");
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
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
