import React from "react";
import { Todo } from "./Todo";

type StatsProps = {
  todos: Array<Todo>;
};

const Stats = (props: StatsProps) => (
  <div>
    <h1>Stats</h1>
    <div>There are {props.todos.length} todos</div>
  </div>
);

export default Stats;
