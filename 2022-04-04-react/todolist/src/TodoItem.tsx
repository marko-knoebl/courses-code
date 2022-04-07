import { Component } from "react";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
  onChangeTodoCompleted: (id: number, completed: boolean) => void;
}

class TodoItem extends Component<TodoItemProps> {
  render() {
    return (
      <li key={this.props.todo.id}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={(event) => {
            this.props.onChangeTodoCompleted(
              this.props.todo.id,
              event.target.checked
            );
          }}
        />
        {this.props.todo.completed ? "DONE: " : "TODO: "}
        {this.props.todo.title}
        <button onClick={() => this.props.onRemoveTodo(this.props.todo.id)}>
          delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
