import React, { Component } from "react";
import TodoType from "../TodoType";
import "./TodoItem.css";
import Button from "@material-ui/core/Button";

type TodoItemProps = {
  todo: TodoType;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
};

class TodoItem extends Component<TodoItemProps> {
  render() {
    return (
      <div
        className={this.props.todo.completed ? "todo completed" : "todo"}
        onClick={this.handleClick}
      >
        <span className="label">
          {this.props.todo.completed ? "DONE" : "TODO"}: {this.props.todo.title}
        </span>{" "}
        <Button onClick={this.handleDelete} variant="contained" color="primary">
          X
        </Button>
      </div>
    );
  }

  handleClick = () => {
    this.props.onCompleted(this.props.todo.id);
  };

  handleDelete = (clickEvent: React.MouseEvent<HTMLButtonElement>) => {
    clickEvent.stopPropagation();
    this.props.onDelete(this.props.todo.id);
  };
}

export default TodoItem;
