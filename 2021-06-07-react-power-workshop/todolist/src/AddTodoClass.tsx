import { Component } from "react";
import { Button } from "@material-ui/core";

type AddTodoProps = {
  onAddition: (newTitle: string) => void;
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
    this.props.onAddition(this.state.newTitle);
    this.setState({ newTitle: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newTitle}
          onChange={(event) => this.setState({ newTitle: event.target.value })}
        />
        <Button type="submit" variant="contained">
          add
        </Button>
      </form>
    );
  }
}

export default AddTodoClass;
