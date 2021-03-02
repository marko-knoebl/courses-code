import { Todo } from "./Todo";
import { Button } from "@material-ui/core";

type Props = {
  todo: Todo;
  onCheckedChange: (checked: boolean) => void;
  onDelete: () => void;
};

function TodoItem(props: Props) {
  return (
    <li
      key={props.todo.id}
      style={{
        padding: "0.5em",
        backgroundColor: props.todo.completed ? "lightgrey" : "lightblue",
        textDecoration: props.todo.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={(event) => props.onCheckedChange(event.target.checked)}
      />
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <Button onClick={() => props.onDelete()}>delete</Button>
    </li>
  );
}
export default TodoItem;
