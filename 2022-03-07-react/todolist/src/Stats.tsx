import { Component } from "react";
import { Todo } from "./Todo";
import "./Stats.css";

type Props = {
  todos: Array<Todo>;
};
type State = {};

class Stats extends Component<Props, State> {
  render() {
    const todosLength = this.props.todos.length;
    const todosCompleted = this.props.todos.filter(
      (todo) => todo.completed
    ).length;
    const todosIncomplete = todosLength - todosCompleted;

    return (
      <div>
        <span className="number">{todosLength}</span> todos (
        <span className="number completed">{todosCompleted}</span> completed,{" "}
        <span className="number incomplete">{todosIncomplete}</span> incomplete)
      </div>
    );
  }
}

export default Stats;
