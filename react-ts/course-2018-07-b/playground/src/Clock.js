import React, { PureComponent } from 'react';

import './Rating.css';

class Clock extends PureComponent {
  constructor() {
    super();
    this.updateTime = this.updateTime.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      time: new Date(),
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    alert('unmounted');
  }

  updateTime() {
    this.setState({ time: new Date() });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Clock;
