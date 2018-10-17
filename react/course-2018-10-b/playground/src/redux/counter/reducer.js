import { INCREMENT, DECREMENT } from './constants';

// Anfangszustand
const initialState = { count: 0 };

// Reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return { count: state.count - 1 };
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      // action ist unbekannt
      return state;
  }
};

export default counter;
