type SetNewTodoTitleAction = {
  type: 'SET_NEW_TODO_TITLE';
  payload: {
    title: string;
  };
};

type UIAction = SetNewTodoTitleAction;

export default UIAction;
