const initialState = [
  { id: 1, title: "groceries", completed: true },
  { id: 2, title: "gardening", completed: false }
];

function todosReducer(oldState = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newId = oldState.reduce(
        (aggregator, todo) => Math.max(aggregator, todo.id + 1),
        1
      );
      return [
        ...oldState,
        { id: newId, title: action.title, completed: false }
      ];
    case "DELETE_TODO":
      return oldState.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return oldState.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_COMPLETED":
      return oldState.filter(todo => !todo.completed);
    case "LOAD_TODOS_SUCCESS":
      return action.todos;
    default:
      return oldState;
  }
}

export default todosReducer;
