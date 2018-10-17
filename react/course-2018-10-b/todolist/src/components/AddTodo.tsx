import * as React from 'react';
import { Dispatch } from 'redux';
import { addTodo } from 'src/redux/tododata/actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

interface IAddTodoProps {
  addTodo: (title: string) => void;
}

interface IAddTodoState {
  newTodoTitle: string;
}

class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {
  constructor(props: IAddTodoProps) {
    super(props);
    this.state = {
      newTodoTitle: ''
    };
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Todo..."
          value={this.state.newTodoTitle}
          onChange={this.handleChange}
        />
      </form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTodoTitle: event.target.value });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Standardverhalten unterdrücken
    event.preventDefault();
    // eigene Reaktion:
    this.props.addTodo(this.state.newTodoTitle);
    // textfeld leeren
    this.setState({ newTodoTitle: '' });
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (title: string) => {
    dispatch(addTodo(title));
  }
});

const ConnectedAddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default ConnectedAddTodo;
