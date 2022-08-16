import { Todo } from "./types";

type Props = {
  todos: Array<Todo>;
};

function Statistics(props: Props) {
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

export default Statistics;
