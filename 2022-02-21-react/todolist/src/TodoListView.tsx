import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

type TodoListViewProps = {
  todos: Array<Todo>;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onLoadTodos: () => void;
  isLoading: boolean;
};

function TodoListView(props: TodoListViewProps) {
  return (
    <div>
      <button onClick={() => props.onLoadTodos()}>load todos from API</button>
      {props.isLoading ? <div>loading...</div> : null}
      <List>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={(completed) =>
              props.onCompletedChange(todo.id, completed)
            }
            onDelete={() => props.onDelete(todo.id)}
          />
        ))}
      </List>
    </div>
  );
}

export default TodoListView;
