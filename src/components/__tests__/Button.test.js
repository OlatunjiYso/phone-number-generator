import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

it('renders the Button component', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot()
});