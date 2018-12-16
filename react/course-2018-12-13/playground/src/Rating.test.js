import React from 'react';
import Rating from './Rating';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Rating stars={4} />).toJSON();
  expect(tree).toMatchSnapshot();
});
