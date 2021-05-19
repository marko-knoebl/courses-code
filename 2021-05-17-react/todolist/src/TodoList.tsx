import { Todo } from "./types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => props.onToggle(todo.id)}
          onDelete={() => props.onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
