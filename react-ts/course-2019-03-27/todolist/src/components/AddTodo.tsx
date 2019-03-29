import React, { Component } from 'react';

type AddTodoProps = {
  onAddTodo: (newTitle: string) => void;
  newTodoTitle: string;
  onNewTodoTitleChange: (newTitle: string) => void;
};

type AddTodoState = {};

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  handleSubmit = (submitEvent: React.FormEvent<HTMLFormElement>) => {
    // prevent the default browser behaviour
    // (which is sending the form contents to the server)
    submitEvent.preventDefault();
    if (this.props.newTodoTitle) {
      this.props.onAddTodo(this.props.newTodoTitle);
    }
  };

  handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onNewTodoTitleChange(changeEvent.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.props.newTodoTitle} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default AddTodo;
