import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = { newTodoTitle: '', isSubmitted: false };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.newTodoTitle} onChange={this.handleChange} />
        {this.state.isSubmitted ? <Redirect to="/" /> : null}
      </form>
    );
  }

  handleChange = event => {
    this.setState({ newTodoTitle: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onNewTodo(this.state.newTodoTitle);
    this.setState({ newTodoTitle: '', isSubmitted: true });
  };
}

export default AddTodo;
