import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

class NewTodo extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.props.newTodo}
          onChange={this.handleChange}
          label="New Todo"
        />
      </form>
    );
  }

  handleChange = event => {
    this.props.onNewTodoChange(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitTodo(this.props.newTodo);
  };
}

export default NewTodo;
