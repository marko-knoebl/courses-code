const uiDataReducer = (state = { addTodoFormVisible: false }, action) => {
  switch (action.type) {
    case "SET_ADD_FORM_VISIBLE":
      return { ...state, addTodoFormVisible: action.visible };
    default:
      return state;
  }
};

export default uiDataReducer;
