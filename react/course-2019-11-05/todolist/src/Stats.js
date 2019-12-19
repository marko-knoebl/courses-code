import React from "react";
import { useSelector } from "react-redux";

const Stats = () => {
  const numTodos = useSelector(state => state.todosData.todos.length);
  return (
    <div>
      <h2>Stats</h2>
      <p>There are {numTodos} todos.</p>
    </div>
  );
};

export default Stats;
