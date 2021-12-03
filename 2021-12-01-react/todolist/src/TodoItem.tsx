import { Button } from "react-bootstrap";
import { Todo } from "./types";
import styles from "./TodoItem.module.css";
import classNames from "classnames";

type TodoItemProps = {
  item: Todo;
  onStatusChange: (completed: boolean) => void;
  onRemove: () => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: props.item.completed,
      })}
    >
      {props.item.completed ? "DONE: " : "TODO: "}
      {props.item.title}
      <Button
        onClick={() => props.onStatusChange(!props.item.completed)}
        className="ms-4"
      >
        toggle
      </Button>
      <Button onClick={() => props.onRemove()} className="ms-2">
        remove
      </Button>
    </li>
  );
}

export default TodoItem;
