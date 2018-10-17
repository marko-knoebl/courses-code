import { TIMES3, MINUS7 } from './constants';

const mathador = (state = { number: 1 }, action) => {
  switch (action.type) {
    case TIMES3:
      return { number: state.number * 3 };
    case MINUS7:
      return { number: state.number - 7 };
    default:
      return state;
  }
};

export default mathador;
