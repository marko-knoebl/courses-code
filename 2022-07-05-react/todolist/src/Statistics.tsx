import { Todo } from "./types";

type StatisticsProps = {
  todos: Array<Todo>;
};

export default function Statistics(props: StatisticsProps) {
  // abgeleitete Daten - nicht im State
  const numTodos = props.todos.length;
  const numCompletedTodos = props.todos.filter((todo) => todo.completed).length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  return (
    <div>
      {numTodos} todos ({numIncompleteTodos} incomplete, {numCompletedTodos}{" "}
      completed)
    </div>
  );
}
