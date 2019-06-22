import React from 'react';
import { shallow } from 'enzyme';
import Analytics from '../NumberAnalytics';

it('renders the App component', () => {
  const wrapper = shallow(<Analytics existingNumbers={[]}/>);
  expect(wrapper).toMatchSnapshot()
});