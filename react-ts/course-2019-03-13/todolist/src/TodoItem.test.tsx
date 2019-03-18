import React from 'react';
import TodoItem from './TodoItem';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(
    <TodoItem
      todo={{ id: 1, title: 'abc', completed: false }}
      onCompleted={() => {}}
    />
  );
});

it('renders with correct content', () => {
  const todoItem = shallow(
    <TodoItem
      todo={{ id: 1, title: 'abc', completed: false }}
      onCompleted={() => {}}
    />
  );
  expect(todoItem.text()).toBe('TODO: abc');
});

it('renders with "todo" css class', () => {
  const todoItem = shallow(
    <TodoItem
      todo={{ id: 1, title: 'abc', completed: false }}
      onCompleted={() => {}}
    />
  );
  expect(todoItem.hasClass('todo')).toBeTruthy();
});

it('renders with "completed" css class', () => {
  const todoItem = shallow(
    <TodoItem
      todo={{ id: 1, title: 'abc', completed: true }}
      onCompleted={() => {}}
    />
  );
  expect(todoItem.hasClass('completed')).toBeTruthy();
});

it('reacts to clicks', () => {
  const mockFunction = jest.fn();
  const todoItem = shallow(
    <TodoItem
      todo={{ id: 1, title: 'abc', completed: true }}
      onCompleted={mockFunction}
    />
  );
  todoItem.simulate('click');
  expect(mockFunction).toBeCalledTimes(1);
});

it('matches snapshot 1', () => {
  const tree = renderer
    .create(<TodoItem
      todo={{ id: 1, title: 'abc', completed: true }}
      onCompleted={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
