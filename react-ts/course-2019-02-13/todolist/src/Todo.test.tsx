import React from 'react';
import Todo from './Todo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Todo
        todo={{ id: 1, completed: false, title: 'test' }}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
