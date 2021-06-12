import { Todo } from "./types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          onCompletedChanged={(completed) => {
            props.onCompletedChange(todo.id, completed);
          }}
          onDelete={() => {
            props.onDelete(todo.id);
          }}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
