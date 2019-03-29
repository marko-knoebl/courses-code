import React, { Component } from 'react';
import TodoType from '../TodoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Array<TodoType>;
  isLoading: boolean;
  onToggle: (id: number) => void;
  onLoadTodos: () => void;
};

type TodoListState = {};

class TodoList extends Component<TodoListProps, TodoListState> {
  render() {
    return (
      <>
        <div>
          {this.props.todos.map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={this.props.onToggle}
            />
          ))}
        </div>
        <button
          onClick={() => {
            this.props.onLoadTodos();
          }}
        >
          {this.props.isLoading ? 'Loading...' : 'Load'}
        </button>
      </>
    );
  }
}

export default TodoList;
