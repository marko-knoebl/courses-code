const initialState = "";

const newTodoTitleReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_TODO_TITLE":
      return action.payload.newTitle;
    default:
      return oldState;
  }
};

export default newTodoTitleReducer;
