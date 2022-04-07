import { Component } from "react";
import { Todo } from "./types";

interface StatsProps {
  todos: Array<Todo>;
}

class Stats extends Component<StatsProps> {
  render() {
    const numTodos = this.props.todos.length;
    const numCompletedTodos = this.props.todos.filter(
      (todo) => todo.completed
    ).length;
    const numIncompleteTodos = numTodos - numCompletedTodos;

    return (
      <div>
        {numTodos} todos ({numCompletedTodos} completed, {numIncompleteTodos}{" "}
        incomplete)
      </div>
    );
  }
}

export default Stats;
