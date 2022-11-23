import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onChangeCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <li>
      <input type="checkbox" checked={props.todo.completed} />
      {props.todo.completed ? "DONE" : "TODO"}: {props.todo.title}
      <button onClick={() => props.onDelete(props.todo.id)}>delete</button>
    </li>
  );
}
