import { Component } from "react";
import { Button, TextField } from "@material-ui/core";

type AddTodoProps = {
  onAddTodo: (newTitle: string) => void;
};
type AddTodoState = {
  newTitle: string;
};

class AddTodoCls extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = {
      newTitle: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <TextField
            value={this.state.newTitle}
            onChange={(event) => {
              this.setState({ newTitle: event.target.value });
            }}
          />
          <Button type="submit" color="primary" variant="contained">
            Add
          </Button>
        </div>
      </form>
    );
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onAddTodo(this.state.newTitle);
    this.setState({ newTitle: "" });
  }
}

export default AddTodoCls;
