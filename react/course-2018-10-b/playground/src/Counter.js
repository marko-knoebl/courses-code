import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { decrement, increment } from './redux/counter/actions';

class Counter extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        {this.props.count}
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state /* redux state */) => {
  return { count: state.counter.count };
};
const mapDispatchToProps = dispatch => {
  return {
    decrement: () => {
      dispatch(decrement());
    },
    increment: () => {
      dispatch(increment());
    }
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
