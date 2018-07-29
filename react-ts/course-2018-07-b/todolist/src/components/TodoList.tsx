import * as React from 'react';
import { ITodo } from '../interfaces';

import FilterTodos from './FilterTodos';
import Todo from './Todo';

interface ITodoListProps {
  todos: ITodo[];
  onCompleted: (id: number) => void;
}

interface ITodoListState {
  filterText: string;
}

class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  constructor(props: ITodoListProps) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  public render() {
    const filteredTodos = this.props.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filterText.toLowerCase())
    );

    return (
      <div>
        <FilterTodos
          filterText={this.state.filterText}
          onChange={this.handleChange}
        />
        <div>
          {filteredTodos.map(todo => (
            // <div key={todo.id}>{todo.text}</div>
            <Todo
              key={todo.id}
              todo={todo}
              onCompleted={this.props.onCompleted}
            />
          ))}
        </div>
      </div>
    );
  }

  private handleChange = (filterText: string) => {
    this.setState({ filterText });
  };
}

export default TodoList;
