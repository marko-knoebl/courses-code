import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';

it('renders a rating with 3 stars without crashing', () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
});

it('renders a single div', () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  expect(instance.children.length).toBe(1);
  expect(instance.children[0].type).toBe('div');
});

it('renders some spans containing stars', () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  const container = instance.children[0];
  for (let child of container.children) {
    expect(child.type).toBe('span');
  }
});

it('renders 3 active and 3 inactive stars', () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  const container = instance.children[0];
  for (let i = 0; i < 3; i++) {
    expect(container.children[i].children[0]).toBe('★');
  }
  for (let i = 3; i < 6; i++) {
    expect(container.children[i].children[0]).toBe('☆');
  }
});

it('triggers an onStarsChange event if a star is clicked', () => {
  const mockFn = jest.fn();
  const instance = TestRenderer.create(
    <Rating stars={3} onStarsChange={mockFn} />,
  ).root;
  const fourthStar = instance.findAllByType('span')[3];
  fourthStar.props.onClick();
  expect(mockFn).toBeCalledWith(4);
});

describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow('number of stars must be 1-6');
  });
  it('throws an error if the number of stars is 7', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={7} />);
    };
    expect(testFn).toThrow('number of stars must be 1-6');
  });
});

it('matches snapshot with 2 stars', () => {
  const tree = TestRenderer.create(<Rating stars={2} />).toJSON();
  expect(tree).toMatchSnapshot();
});
