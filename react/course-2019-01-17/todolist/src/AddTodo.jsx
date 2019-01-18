import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AddTodo extends Component {
  /*
    event:
      onAddTodo: function
  */
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.newTodo} onChange={this.handleChange} />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };
}

export default AddTodo;
