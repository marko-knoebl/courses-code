import { Todo } from "./types";

interface StatisticsProps {
  todos: Array<Todo>;
}

export default function Statistics(props: StatisticsProps) {
  const numTodos = props.todos.length;
  const numIncompleteTodos = props.todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div>
      <h3>Statistics</h3>
      <p>number of todos: {numTodos}</p>
      <p>number of incomplete todos: {numIncompleteTodos}</p>
    </div>
  );
}
