const initialState = { number: 1 };

const mathador = (state = initialState, action) => {
  switch (action.type) {
    case "TIMES3":
      return { number: state.number * 3 };
    case "MINUS7":
      return { number: state.number - 7 };
    default:
      return state;
  }
};

export default mathador;
