import TodoItem from "./TodoItem";

/*
props / events:

- todos

- onDelete(id)
- onToggle(id)

*/

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
            onDelete={() => {
              props.onDelete(todo.id);
            }}
            onToggle={() => {
              props.onToggle(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
