import { Button } from "@mui/material";
import { Todo } from "./types";

import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li
      key={props.todo.id}
      className={
        props.todo.completed
          ? styles.todo + " " + styles.completed
          : styles.todo
      }
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) =>
          props.onCompletedChange(props.todo.id, event.target.checked)
        }
      />
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <button onClick={() => props.onDelete(props.todo.id)}>delete</button>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          props.onCompletedChange(props.todo.id, !props.todo.completed)
        }
      >
        toggle
      </Button>
    </li>
  );
}

export default TodoItem;
