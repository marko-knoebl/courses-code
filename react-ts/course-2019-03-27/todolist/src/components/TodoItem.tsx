import React, { PureComponent } from 'react';
import TodoType from '../TodoType';
import './TodoItem.css';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
};

type TodoItemState = {};

class TodoItem extends PureComponent<TodoItemProps, TodoItemState> {
  render() {
    // "todo-item" or "todo-item completed"
    return (
      <div
        className={
          this.props.todo.completed ? 'todo-item completed' : 'todo-item'
        }
        id="abc"
        onClick={() => {
          this.props.onToggle(this.props.todo.id);
        }}
      >
        {this.props.todo.title}
      </div>
    );
  }
}

export default TodoItem;
