import Mathador from "./Mathador";

import { connect } from "react-redux";

// state in der Funktion unten ist der Redux-State
const mapStateToProps = state => {
  return {
    number: state.m.number
  };
};

// dispatch in dieser Funktion ist die dispatch-Funktion des Stores.
// damit können wir actions auslösen (dispatchen)
const mapDispatchToProps = dispatch => {
  return {
    times3: () => {
      dispatch({ type: "TIMES3" });
    },
    minus7: () => {
      dispatch({ type: "MINUS7" });
    }
  };
};

const MathadorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mathador);

export default MathadorContainer;
