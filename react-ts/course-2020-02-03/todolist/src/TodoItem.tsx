import styles from "./TodoItem.module.css";
import React from "react";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <li
      d-completed={props.completed ? "true" : "false"}
      onClick={() => {
        props.onToggle();
      }}
      className={props.completed ? styles.todoitem : styles.todoitem}
    >
      {props.completed ? "DONE: " : "TODO: "}
      {props.title}
    </li>
  );
};

export default TodoItem;
