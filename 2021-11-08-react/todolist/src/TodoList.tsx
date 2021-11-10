import { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

type TodoListProps = {
  todos: Array<Todo>;
  onDeleteTodo: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
  onTitleChange: (id: number, title: string) => void;
};

function TodoList(props: TodoListProps) {
  const [filterText, setFilterText] = useState("");

  const filteredTodos = props.todos.filter((todo) =>
    todo.title.includes(filterText)
  );

  return (
    <div>
      <input
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={(id) => props.onDeleteTodo(id)}
            onCompletedChange={(id, completed) =>
              props.onCompletedChange(id, completed)
            }
            onTitleChange={(id, title) => props.onTitleChange(id, title)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
