import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext, useTheme } from "./ThemeContext";
import { Todo } from "./types";

import styles from "./TodoItem.module.css";
import classNames from "classnames";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
  onTitleChange: (id: number, title: string) => void;
};

function TodoItem(props: TodoItemProps) {
  const [titleEditable, setTitleEditable] = useState(false);

  // const themeContext = useContext(ThemeContext);
  const themeContext = useTheme();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onCompletedChange(props.todo.id, event.target.checked);
  }

  let style;
  if (themeContext.theme === "dark") {
    style = { backgroundColor: "#999999" };
  } else {
    style = { backgroundColor: "white" };
  }

  return (
    <li
      style={style}
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: props.todo.completed,
      })}
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={handleChange}
      />
      {props.todo.completed ? "DONE" : "TODO"}:{" "}
      {titleEditable ? (
        <input
          value={props.todo.title}
          onChange={(event) =>
            props.onTitleChange(props.todo.id, event.target.value)
          }
        />
      ) : (
        <span>{props.todo.title}</span>
      )}
      <Button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</Button>
      <Button onClick={() => setTitleEditable(!titleEditable)}>
        toggle edit title
      </Button>
    </li>
  );
}

export default TodoItem;
