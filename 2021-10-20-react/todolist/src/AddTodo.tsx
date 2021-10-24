import { useState } from "react";

type AddTodoProps = {
  onAdd: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState<string>("");

  function handleAddFormSubmit() {
    props.onAdd(newTitle);
    setNewTitle("");
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddFormSubmit();
      }}
    >
      <input
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTodo;
