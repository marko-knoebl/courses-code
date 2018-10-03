import React, { PureComponent } from 'react';

class Clock extends PureComponent {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  render() {
    return <div>{this.state.time.toTimeString()}</div>;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

export default Clock;
