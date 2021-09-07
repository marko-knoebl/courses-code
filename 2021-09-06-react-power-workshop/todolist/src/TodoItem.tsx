type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onCompletedChange: (completed: boolean) => void;
  onDelete: () => void;
};

const todoItemBaseStyle = {
  margin: 8,
  padding: 8,
};

function TodoItem(props: TodoItemProps) {
  return (
    <li
      key={props.id}
      style={{
        ...todoItemBaseStyle,
        backgroundColor: props.completed ? "lightgrey" : "lightblue",
      }}
    >
      <input
        type="checkbox"
        checked={props.completed}
        onChange={(event) => props.onCompletedChange(event.target.checked)}
      />
      {props.title}
      <button onClick={() => props.onDelete()}>delete</button>
    </li>
  );
}

export default TodoItem;
