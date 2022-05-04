import { Todo } from "./types";

type StatisticsProps = {
  todos: Array<Todo>;
};

function Statistics(props: StatisticsProps) {
  const numTodos = props.todos.length;
  const numCompletedTodos = props.todos.filter((todo) => todo.completed).length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  return (
    <div>
      {numTodos} todos ({numCompletedTodos} completed, {numIncompleteTodos}{" "}
      incomplete)
    </div>
  );
}

export default Statistics;
