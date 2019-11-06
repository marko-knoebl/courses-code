import React, { Component } from "react";

class NameInput extends Component {
  constructor() {
    super();
    this.state = { firstName: "Tom", lastName: "Doe" };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.firstName}
          onChange={event => {
            const newFirstName = event.target.value;
            this.setState({ firstName: newFirstName });
          }}
        />
        <input
          value={this.state.lastName}
          onChange={event => {
            const newLastName = event.target.value;
            this.setState({ lastName: newLastName });
          }}
        />
        <button onClick={this.clear}>Clear</button>
        <p>
          Welcome, {this.state.firstName}!<br />
          Your name is {this.state.firstName.length} characters long.
        </p>
      </div>
    );
  }

  clear = clickEvent => {
    this.setState({ firstName: "", lastName: "" });
  };
}

export default NameInput;
