import * as React from 'react';
import ITodo from 'src/ITodo';

// Zusatzfeature von Webpack
import './Todo.css';

interface ITodoProps {
  todo: ITodo;
  toggle: (id: number) => void;
}

class Todo extends React.Component<ITodoProps> {
  public render() {
    return (
      <div
        className={this.props.todo.completed ? 'todo completed' : 'todo'}
        onClick={this.handleClick}
      >
        {this.props.todo.completed ? 'DONE:' : 'TODO:'}
        {this.props.todo.title}
      </div>
    );
  }

  private handleClick = () => {
    this.props.toggle(this.props.todo.id);
  };
}

export default Todo;
