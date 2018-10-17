import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { times3, minus7 } from './redux/mathador/actions';

class Counter extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.props.times3}>*3</button>
        {this.props.number}
        <button onClick={this.props.minus7}>-7</button>
      </div>
    );
  }
}

const mapStateToProps = (state /* redux state */) => {
  return { number: state.mathador.number };
};
const mapDispatchToProps = dispatch => {
  return {
    times3: () => {
      dispatch(times3());
    },
    minus7: () => {
      dispatch(minus7());
    }
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
