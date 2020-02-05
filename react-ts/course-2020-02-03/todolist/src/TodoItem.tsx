import styles from "./TodoItem.module.css";
import React from "react";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  const completed = props.completed;
  return (
    <li
      d-completed={completed ? "true" : "false"}
      onClick={() => {
        props.onToggle();
      }}
      className={styles.todoitem}
    >
      {completed ? "DONE" : "TODO"}: {props.title}
    </li>
  );
};

export default TodoItem;
