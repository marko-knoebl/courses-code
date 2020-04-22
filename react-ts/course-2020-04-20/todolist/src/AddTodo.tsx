import React, { useState, Component } from "react";
import { useHistory } from "react-router-dom";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

type AddTodoState = {
  title: string;
};

class AddTodoClass extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.props.onAddTodo(this.state.title);
        }}
      >
        <input
          value={this.state.title}
          onChange={(event) => {
            this.setState({ title: event.target.value });
          }}
          type="text"
        />
        <button>add</button>
      </form>
    );
  }
}

function AddTodo(props: AddTodoProps) {
  const [title, setTitle] = useState("");
  const history = useHistory();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onAddTodo(title);
        history.push("/");
      }}
    >
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        type="text"
      />
      <button>add</button>
    </form>
  );
}

export default React.memo(AddTodo);
