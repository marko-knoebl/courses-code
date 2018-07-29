import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

interface IAddTodoProps {
  onNewTodo: (newTodoText: string) => void;
}

interface IAddTodoState {
  newTodoText: string;
  wasSubmitted: boolean;
}

class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {
  constructor(props: IAddTodoProps) {
    super(props);
    this.state = {
      newTodoText: '',
      wasSubmitted: false,
    };
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*<input value={this.state.newTodoText} onChange={this.handleChange} />*/}
        <TextField
          value={this.state.newTodoText}
          onChange={this.handleChange}
          label="New Todo"
          type="text"
          margin="normal"
        />
        <Button color="primary" onClick={this.handleClick} variant="contained">
          Add
        </Button>
        {this.state.wasSubmitted ? <Redirect to="/" /> : null }
      </form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTodoText: event.target.value });
  };

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onNewTodo(this.state.newTodoText);
    this.setState({ newTodoText: '', wasSubmitted: true });
  };

  private handleClick = () => {
    this.props.onNewTodo(this.state.newTodoText);
    this.setState({ newTodoText: '', wasSubmitted: true });
  };
}

export default AddTodo;
