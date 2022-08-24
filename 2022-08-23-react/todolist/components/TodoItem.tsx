import { Todo } from "../types";

type Props = {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
  // onCompletedChange: (newCompleted: boolean) => void;
};

export default function TodoItem(props: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) => props.onToggle()}
      />
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <button onClick={() => props.onDelete()}>delete</button>
    </li>
  );
}
