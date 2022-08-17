// HOME VIEW

import AddTodo from "./AddTodo";
import Statistics from "./Statistics";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

type Props = {
  todos: Array<Todo>;
  apiStatus: string;
  onAddTodo: (title: string) => void;
  onDeleteTodo: (id: number) => void;
  onSetTodoCompleted: (id: number, completed: boolean) => void;
  onLoadTodos: () => void;
};

export default function Home(props: Props) {
  return (
    <div>
      <button onClick={() => props.onLoadTodos()}>load todos from API</button>

      {props.apiStatus === "loading" ? <div>loading...</div> : null}
      {props.apiStatus === "error" ? <div>error</div> : null}

      <AddTodo onAdd={(title) => props.onAddTodo(title)} />

      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={props.onSetTodoCompleted}
            onDelete={props.onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
