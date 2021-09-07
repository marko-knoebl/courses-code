import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type AddTodoProps = {
  onTodoAdd: (title: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const [newTitle, setNewTitle] = useState("");

  return (
    <Form
      onSubmit={(event) => {
        // standardverhalten deaktivieren
        event.preventDefault();
        props.onTodoAdd(newTitle);
      }}
    >
      <Form.Group>
        <Form.Control
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="secondary" size="lg">
        add
      </Button>
    </Form>
  );
}

export default AddTodo;
