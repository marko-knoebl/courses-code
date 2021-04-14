import { Component } from "react";

type AddTodoProps = {
  onAdd: (newTitle: string) => void;
};
type AddTodoState = {
  newTitle: string;
};

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = { newTitle: "" };
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.props.onAdd(this.state.newTitle);
          this.setState({ newTitle: "" });
        }}
      >
        <input
          value={this.state.newTitle}
          onChange={(event) => {
            this.setState({ newTitle: event.target.value });
          }}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default AddTodo;
