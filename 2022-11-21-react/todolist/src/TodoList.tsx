import { Todo } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  onChangeCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChangeCompleted={props.onChangeCompleted}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}
