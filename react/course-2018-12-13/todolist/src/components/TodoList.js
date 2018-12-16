import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          // das event "onCompleted" wird direkt an die
          // Elternkomponente weitergegeben
          <Todo todo={todo} onCompleted={this.props.onCompleted} />
        ))}
      </div>
    );
  }
}

export default TodoList;
