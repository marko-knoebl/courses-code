import * as React from 'react';
import { ITodo } from '../interfaces';

import './Todo.css';
import Checkbox from '@material-ui/core/Checkbox';

interface ITodoProps {
  todo: ITodo;
  onCompleted: (id: number) => void;
}

class Todo extends React.PureComponent<ITodoProps, {}> {
  public render() {
    return (
      <div
        className={this.props.todo.done ? 'todo done' : 'todo'}
        onClick={this.handleClick}>
        <Checkbox
          checked={this.props.todo.done}
          onChange={this.handleChange}
          value="checkedA"
        />
        {this.props.todo.done ? 'DONE: ' : 'TODO: '}
        {this.props.todo.text}
      </div>
    );
  }

  private handleChange = () => {
    if (!this.props.todo.done) {
      this.props.onCompleted(this.props.todo.id);
    }
  };

  private handleClick = (event: React.MouseEvent) => {
    if (!this.props.todo.done) {
      this.props.onCompleted(this.props.todo.id);
    }
  };
}

export default Todo;
