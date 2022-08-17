import { Todo } from "./types";

import "./TodoItem.css";
import { memo } from "react";

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
};

function TodoItem(props: Props) {
  return (
    <li
      className={
        props.todo.completed ? "TodoItem TodoItem--Completed" : "TodoItem"
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
    </li>
  );
}

export default memo(TodoItem);
