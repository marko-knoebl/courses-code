import React, { Component } from 'react';

class Todo extends Component {
  /*
    props:
      todo
    events:
      onToggleTodo: function
  */
  render() {
    let todo = this.props.todo;
    return (
      <div
        className={todo.completed ? 'todo completed' : 'todo'}
        onClick={this.handleClick}
      >
        {todo.completed ? 'DONE: ' : 'TODO: '}
        {todo.title}
      </div>
    );
  }

  handleClick = () => {
    this.props.onToggleTodo(this.props.todo.id);
  };
}

export default Todo;
