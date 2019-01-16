import React from 'react';
import Rating from './Rating';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rating stars={3} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Rating stars={4} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
