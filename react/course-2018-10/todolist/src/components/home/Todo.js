import React, { PureComponent } from 'react';

import './Todo.css';

class Todo extends PureComponent {
  render() {
    return (
      <div
        key={this.props.todo.id.toString()}
        onClick={() => this.props.onToggle(this.props.todo.id)}
        className={this.props.todo.completed ? 'todo completed' : 'todo'}
      >
        {this.props.todo.completed ? 'DONE:' : 'TODO:'}
        {this.props.todo.title}
      </div>
    );
  }
}

export default Todo;
