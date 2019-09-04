import React, { Component } from "react";

class ClockClass extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      intervalId: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default ClockClass;
