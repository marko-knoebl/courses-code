import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        {this.props.number}
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
