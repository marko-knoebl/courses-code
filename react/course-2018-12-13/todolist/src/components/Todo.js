import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.todo.completed ? 'DONE: ' : 'TODO: '}
        {this.props.todo.title}
      </div>
    );
  }

  handleClick = () => {
    // wenn das item angeklickt wird,
    // löse das Event "onCompleted" aus
    this.props.onCompleted(this.props.todo.id);
  };
}

export default Todo;
