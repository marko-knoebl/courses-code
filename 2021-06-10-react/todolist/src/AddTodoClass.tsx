import React, { Component } from "react";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};
type AddTodoState = {
  newTitle: string;
};

class AddTodoClass extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = { newTitle: "" };
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onAddTodo(this.state.newTitle);
    this.setState({ newTitle: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newTitle}
          onChange={(event) => this.setState({ newTitle: event.target.value })}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default AddTodoClass;
