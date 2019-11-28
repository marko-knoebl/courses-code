function todosReducer(oldState, action) {
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
    default:
      throw new Error("unknown action type");
  }
}

export default todosReducer;
