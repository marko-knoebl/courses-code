import { Todo } from "./Todo";

import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo;
  onChange: (id: number, todo: Partial<Todo>) => void;
  onDelete: (id: number) => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li
      className={
        props.todo.completed
          ? `${styles.todo} ${styles.completed}`
          : styles.todo
      }
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) => {
          props.onChange(props.todo.id, { completed: event.target.checked });
        }}
      />
      {props.todo.completed ? "DONE:" : "TODO:"} {props.todo.title}
      <button onClick={() => props.onDelete(props.todo.id)}>delete</button>
    </li>
  );
}

export default TodoItem;
