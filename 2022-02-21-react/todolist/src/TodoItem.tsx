import ListItem from "@mui/material/ListItem";
import { Todo } from "./types";

import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
  onCompletedChange: (completed: boolean) => void;
  onDelete: () => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <ListItem className={props.todo.completed ? "todo completed" : "todo"}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) => props.onCompletedChange(event.target.checked)}
      />
      {props.todo.title}{" "}
      <button onClick={() => props.onDelete()}>delete</button>
    </ListItem>
  );
}

export default TodoItem;
