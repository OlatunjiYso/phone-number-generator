import React from 'react';
import { shallow } from 'enzyme';
import ListingSection from '../ListingSection';

it('renders the ListingSection component', () => {
  const wrapper = shallow(<ListingSection existingNumbers={[]}/>);
  expect(wrapper).toMatchSnapshot();
});