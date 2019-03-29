import React, { PureComponent } from 'react';
import './TodoList.less';

class TodoList extends PureComponent {
  constructor() {
    super();
    // initialize the state
    this.state = {
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'taxes', completed: true }
      ]
    };
  }

  deleteCompleted = () => {
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.todos.map(todo => (
            // "todo-item" or "todo-item completed"
            <div
              key={todo.id}
              className={todo.completed ? 'todo-item completed' : 'todo-item'}
              id="abc"
            >
              {todo.title}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            this.setState({ todos: [] });
          }}
        >
          delete all
        </button>
        <button
          onClick={() => {
            this.deleteCompleted();
          }}
        >
          delete completed
        </button>
      </div>
    );
  }
}

export default TodoList;
