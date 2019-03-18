import { mapDispatchToProps } from './TodoListContainer';

it('dispatches a "TODO_COMPLETED" action', () => {
  const mockDispatchFn = jest.fn();

  const props = mapDispatchToProps(mockDispatchFn);

  props.onCompleted(2);

  expect(mockDispatchFn).toBeCalledWith({
    type: 'TODO_COMPLETED',
    payload: { id: 2 }
  });
});
