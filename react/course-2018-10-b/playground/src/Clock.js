import React, { PureComponent } from 'react';

class Clock extends PureComponent {
  constructor() {
    super();
    this.state = {
      now: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.now}</div>;
  }
}

export default Clock;
