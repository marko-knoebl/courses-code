import Counter from './Counter';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  // state ist der Redux-state
  return { number: state.count };
};

const mapDispatchToProps = dispatch => {
  // dispatch ist die dispatch-Funktion des Redux-stores
  return {
    decrement: () => {
      // ein event in der Komponente ist aufgetreten.
      // Wir beschreiben, was im Redux-Store geschehen soll.
      dispatch({ type: 'DECREMENT' });
    },
    increment: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
