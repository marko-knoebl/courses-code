import React from "react";

class Counter extends React.Component {
  render() {
    return <button onClick={this.handleClick}>{this.props.count}</button>;
  }

  handleClick = event => {
    if (event.button === 0) {
      // linksklick
      this.props.increment();
    } else {
      // rechtsklick
      this.props.decrement();
    }
  };
}

export default Counter;
