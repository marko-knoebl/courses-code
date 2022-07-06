import { Button } from "@material-ui/core";
import { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, newCompleted: boolean) => void;
  onEditTitle: (id: number) => void;
};

export default function TodoItem(props: TodoItemProps) {

  return (
    <li
      className={props.todo.completed ? "todo completed" : "todo"}
    >
      {props.todo.title}
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) =>
          props.onChangeCompleted(props.todo.id, event.target.checked)
        }
      />
      <Button variant="contained" onClick={() => props.onDelete(props.todo.id)}>
        delete
      </Button>
      <Button
        variant="contained"
        onClick={() => props.onEditTitle(props.todo.id)}
      >
        edit
      </Button>
    </li>
  );
}
