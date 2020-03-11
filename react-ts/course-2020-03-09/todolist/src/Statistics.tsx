import React from "react";
import Todo from "./Todo";

type StatisticsProps = {
  todos: Array<Todo>;
};

function Statistics(props: StatisticsProps) {
  const numActiveTodos = props.todos.filter(todo => !todo.completed).length;
  return (
    <div>
      active todos: {numActiveTodos}
      <br />
      completed todos: {props.todos.length - numActiveTodos}
    </div>
  );
}

export default Statistics;
