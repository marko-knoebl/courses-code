import { Todo } from "./types";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import classNames from "classnames";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, completed: boolean) => void;
};

const Button = styled.button`
  padding: 8px;
  background-color: blue;
`;

function TodoItem(props: TodoItemProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <li
      className={classNames({
        todo: true,
        completed: props.todo.completed,
        dark: themeContext?.theme === "dark",
      })}
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) =>
          props.onChangeCompleted(props.todo.id, event.target.checked)
        }
      />
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <Button onClick={() => props.onDelete(props.todo.id)}>delete</Button>
    </li>
  );
}

export default TodoItem;
