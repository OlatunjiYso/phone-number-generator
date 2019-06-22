import React from 'react';
import { shallow } from 'enzyme';
import NumberFactory from '../NumberFactory'

it('renders the App component', () => {
  const wrapper = shallow(<NumberFactory />);
  expect(wrapper).toMatchSnapshot()
});