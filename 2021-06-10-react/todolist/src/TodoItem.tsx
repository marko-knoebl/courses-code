import { useContext } from "react";
import ThemeContext, { useThemeContext } from "./ThemeContext";
import { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onCompletedChanged: (completed: boolean) => void;
  onDelete: () => void;
};

function TodoItem(props: TodoItemProps) {
  const theme = useThemeContext();
  return (
    <li style={{ backgroundColor: theme === "default" ? "white" : "grey" }}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) => {
          props.onCompletedChanged(event.target.checked);
        }}
      />
      <span
        style={{
          color: props.todo.completed ? "grey" : "black",
          textDecoration: props.todo.completed ? "line-through" : "none",
        }}
      >
        {props.todo.completed ? "DONE: " : "TODO: "}
        {props.todo.title}
      </span>
      <button onClick={() => props.onDelete()}>delete</button>
    </li>
  );
}

export default TodoItem;
