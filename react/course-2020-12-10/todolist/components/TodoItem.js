/*
props / events:

- title
- completed

- onDelete
- onToggle

*/

import styles from "./TodoItem.module.css";

function TodoItem(props) {
  return (
    <li
      className={
        styles.todoitem + (props.completed ? " " + styles.completed : "")
      }
    >
      {props.completed ? "DONE: " : "TODO: "}
      {props.title}
      <button
        onClick={() => {
          props.onDelete();
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          props.onToggle();
        }}
      >
        toggle
      </button>
    </li>
  );
}

export default TodoItem;
