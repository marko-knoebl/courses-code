import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  /*
    state:
      filterText
    props:
      todos
    events:
      onToggleTodo: function
  */

  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.filterText}
          onChange={this.handleFilterChange}
        />

        {this.props.todos
          .filter(todo =>
            todo.title
              .toLowerCase()
              .includes(this.state.filterText.toLowerCase())
          )
          .map(todo => (
            <Todo
              todo={todo}
              key={todo.id.toString()}
              onToggleTodo={this.props.onToggleTodo}
            />
          ))}
      </div>
    );
  }

  handleFilterChange = event => {
    this.setState({ filterText: event.target.value });
  };
}

export default TodoList;
