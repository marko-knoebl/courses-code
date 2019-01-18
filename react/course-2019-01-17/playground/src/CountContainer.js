import Count from './Count';
import { connect } from 'react-redux';

// verbindet redux-state mit react properties
const mapStateToProps = state => ({ count: state.count });

// verbindet react properties mit redux actions
const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT' });
  },
  onDecrement: () => {
    dispatch({ type: 'DECREMENT' });
  }
});

const CountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);

export default CountContainer;
