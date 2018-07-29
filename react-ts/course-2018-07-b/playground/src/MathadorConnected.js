import Mathador from './Mathador';
import { connect } from 'react-redux';
import { TIMES3, MINUS7 } from './mathadorconstants';

const mapStateToProps = state => ({
  mathadorNumber: state.mathadorNumber,
});

const mapDispatchToProps = dispatch => ({
  onTimes3: () => {
    dispatch({ type: TIMES3 });
  },
  onMinus7: () => {
    dispatch({ type: MINUS7 });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mathador);
