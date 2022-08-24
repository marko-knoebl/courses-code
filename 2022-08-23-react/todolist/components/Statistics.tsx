import { Todo } from "../types";

type Props = {
  todos: Array<Todo>;
};

export default function Statistics(props: Props) {
  // abgeleitete Werte:
  const numTodos = props.todos.length;
  const completedTodos = props.todos.filter((todo) => todo.completed);
  const numCompletedTodos = completedTodos.length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  return (
    <div>
      {numTodos} todos ({numIncompleteTodos} incomplete, {numCompletedTodos}{" "}
      completed)
    </div>
  );
}
