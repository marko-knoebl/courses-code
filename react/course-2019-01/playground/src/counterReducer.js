// reducer erhält alten zustand und eine action
// reducer gibt neuen zustand zurück

// Struktur von state z.B.: state = { count: 2 }

const initialState = { count: 0 };

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
