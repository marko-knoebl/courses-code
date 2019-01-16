import Counter from "./Counter";

import { connect } from "react-redux";

// verbinde die React-Komponente "Counter" mit dem
// Redux-Store -> CounterContainer

// state in der Funktion unten ist der Redux-State
const mapStateToProps = state => {
  return {
    count: state.c.count
  };
};

// dispatch in dieser Funktion ist die dispatch-Funktion des Stores.
// damit können wir actions auslösen (dispatchen)
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    }
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
