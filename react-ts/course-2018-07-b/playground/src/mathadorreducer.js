import { TIMES3, MINUS7 } from './mathadorconstants';

const initialState = { mathadorNumber: 1 };

const mathador = (state=initialState, action) => {
  // erhält alten state und eine action
  // gibt neuen state zurück
  switch (action.type) {
    case TIMES3:
      return { mathadorNumber: state.mathadorNumber * 3 };
    case MINUS7:
      return { mathadorNumber: state.mathadorNumber - 7 };
    default:
      return state;
  }
};

export default mathador;
