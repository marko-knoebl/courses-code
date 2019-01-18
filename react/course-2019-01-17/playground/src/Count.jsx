import React, {Component} from 'react';

class Count extends Component {
  /*
    props:
      count
    events:
      onIncrement
      onDecrement
   */
  render() {
    return <div>
      {this.props.count}
      <button onClick={this.props.onIncrement}>+</button>
      <button onClick={this.props.onDecrement}>-</button>
    </div>
  }
}

export default Count;
