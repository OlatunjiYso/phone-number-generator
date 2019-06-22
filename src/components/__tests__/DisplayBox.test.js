import React from 'react';
import { shallow } from 'enzyme';
import DisplayBox from '../DisplayBox';

it('renders the DisplayBox component', () => {
  const wrapper = shallow(<DisplayBox />);
  expect(wrapper).toMatchSnapshot()
});