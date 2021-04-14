type TodoItemProps = {
  title: string;
  completed: boolean;
  onCompletedChange: (completed: boolean) => void;
  onDelete: () => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={(event) => {
          props.onCompletedChange(event.target.checked);
        }}
      />
      {props.completed ? "DONE: " : "TODO: "}
      {props.title}
      <button onClick={() => props.onDelete()}>delete</button>
    </li>
  );
}

export default TodoItem;
