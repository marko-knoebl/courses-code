import React, { PureComponent } from 'react';

import Todo from './Todo';

class TodoList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo
            todo={todo}
            onToggle={() => {
              this.props.onToggle(todo.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
