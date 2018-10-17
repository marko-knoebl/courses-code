import React from 'react';
import renderer from 'react-test-renderer';

import Rating from './Rating';

test('renders correctly', () => {
  const tree = renderer.create(<Rating stars={2} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Rating stars={5} />).toJSON();
  expect(tree).toMatchSnapshot();
});
