/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoItem(props: TodoItemProps) {
  const theme = useContext(ThemeContext);

  return (
    <li
      css={css`
        padding: 4px;
        margin: 4px;
        text-decoration: ${props.completed ? "line-through" : "none"};
        background-color: ${theme === "dark" ? "darkblue" : "lightblue"};
      `}
    >
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => {
          props.onToggle();
        }}
      />
      {props.completed ? "done: " : "todo: "}
      {props.title}
      <Button onClick={() => props.onDelete()}>delete</Button>
      <Button onClick={() => props.onToggle()}>toggle</Button>
    </li>
  );
}

export default TodoItem;
