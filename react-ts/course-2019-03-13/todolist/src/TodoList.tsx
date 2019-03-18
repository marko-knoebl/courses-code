import React, { PureComponent } from 'react';
import TodoType from './TodoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  hasError: boolean;
  todos: Array<TodoType>;
  onCompleted: (id: number) => void;
};
type TodoListState = {};

class TodoList extends PureComponent<TodoListProps, TodoListState> {
  render() {
    return this.props.hasError ? (
      <div>Error: could not load todos</div>
    ) : (
      <div>
        {this.props.todos.map(todoData => (
          <TodoItem
            todo={todoData}
            key={todoData.id}
            onCompleted={() => {
              this.props.onCompleted(todoData.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
