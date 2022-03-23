import { Button } from "@mui/material";
import { Component } from "react";

type Props = {
  onAdd: (newTitle: string) => void;
};
type State = {
  newTitle: string;
};

class AddTodo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newTitle: "",
    };
  }

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    this.props.onAdd(this.state.newTitle);
    this.setState({ newTitle: "" });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          new title:{" "}
          <input
            value={this.state.newTitle}
            onChange={(event) =>
              this.setState({ newTitle: event.target.value })
            }
          />
        </label>
        <Button type="submit" variant="contained" color="secondary">
          Add
        </Button>
      </form>
    );
  }
}

export default AddTodo;
