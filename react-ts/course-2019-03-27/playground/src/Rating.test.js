import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Rating from './Rating';

it('renders a Rating without crashing', () => {
  const wrapper = shallow(<Rating />);
});

it('renders a Rating (with subcomponents) without crashing', () => {
  const wrapper = mount(<Rating />);
});

it('renders 3 active star elements', () => {
  const wrapper = shallow(<Rating stars={3}/>);
  expect(wrapper.find('.star-active').length).to.equal(3 )
})
