import { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, completed: boolean) => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) =>
          props.onChangeCompleted(props.todo.id, event.target.checked)
        }
      />
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <button onClick={() => props.onDelete(props.todo.id)}>delete</button>
    </li>
  );
}

export default TodoItem;
