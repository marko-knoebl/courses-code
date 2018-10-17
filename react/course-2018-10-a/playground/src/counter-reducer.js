const initialState = 0;

// example call:
// counterReducer(0, {type: "INCREMENT"}) -> 1
// counterReducer(1, {type: "INCREMENT"}) -> 2
// counterReducer(2, {type: "DECREMENT"}) -> 1

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
