import { Button } from "@material-ui/core";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

import styles from "./TodoItem.module.scss";
import classNames from "classnames";

type TodoItemProps = {
  title: string;
  isCompleted: boolean;
  onDelete: () => void;
  onCompletedChange: (completed: boolean) => void;
};

function TodoItem(props: TodoItemProps) {
  const themeContext = useContext(ThemeContext);
  return (
    <li
      style={{
        padding: 8,
        backgroundColor: themeContext === "default" ? "white" : "black",
        color: themeContext === "default" ? "black" : "white",
      }}
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: props.isCompleted,
      })}
    >
      <input
        type="checkbox"
        checked={props.isCompleted}
        onChange={(event) => props.onCompletedChange(event.target.checked)}
      />
      {props.title}
      <Button variant="contained" onClick={() => props.onDelete()}>
        X
      </Button>
    </li>
  );
}

export default TodoItem;
