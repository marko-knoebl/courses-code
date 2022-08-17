import { memo, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Todo } from "./types";

type Props = {
  todos: Array<Todo>;
};

function Statistics(props: Props) {
  const themeContext = useContext(ThemeContext);

  const numTodos = props.todos.length;
  const numCompletedTodos = props.todos.filter((todo) => todo.completed).length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  return (
    <div
      style={{
        backgroundColor: themeContext.theme === "light" ? "white" : "grey",
      }}
    >
      {numTodos} todos ({numIncompleteTodos} incomplete, {numCompletedTodos}{" "}
      completed)
    </div>
  );
}

const StatisticsMemo = memo(Statistics);

export default StatisticsMemo;
