import React from "react";
import { Todo } from "../../Todo";

type StatsRouteProps = {
  todos: Array<Todo>;
};

function StatsRoute(props: StatsRouteProps) {
  return (
    <div>
      <h1>stats</h1>
      <p>{props.todos.length} todos</p>
    </div>
  );
}

export default StatsRoute;
