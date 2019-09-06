const initialState = {
  todos: [
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "taxes", completed: true }
  ],
  isLoading: false,
  newTitle: "",
  newTitleChanged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_TITLE":
      return {
        ...state,
        newTitle: action.text,
        newTitleChanged: true
      };
    case "ADD_TODO":
      let maxId = 0;
      for (let todo of state.todos) {
        maxId = Math.max(maxId, todo.id);
      }
      return {
        ...state,
        newTitle: "",
        newTitleChanged: false,
        todos: [
          ...state.todos,
          { id: maxId + 1, title: action.title, completed: false }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case "DELETE_COMPLETED_TODOS":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case "DELETE_ALL_TODOS":
      return {
        ...state,
        todos: []
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.todos
      };
    default:
      // unbekannte Action - lasse den State unverändert
      return state;
  }
};

export default reducer;
