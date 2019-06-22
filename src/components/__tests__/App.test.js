import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders the App component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot()
});

it('expects App to have a state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().currentNumber).toEqual('xxxxxxxxxx');
  expect(wrapper.state().highestNumber).toEqual(0);
  expect(wrapper.state().lowestNumber).toEqual(9999999999);
  expect(wrapper.state().existingNumbers).toEqual([]);
})

it('expects App to have props', () => {
  const wrapper = shallow(<App />);
  let props = wrapper.props();
  expect(props).toBeDefined()
})

it('should be able to sort in ascending and descending order numbers', () => {
  const wrapper = shallow(<App />);
  wrapper.state().existingNumbers = [4,7,1,2,5,3,6];
  const instance = wrapper.instance();
  instance.sortInAscending();
  expect(wrapper.state().existingNumbers).toEqual([1,2,3,4,5,6,7]);
  instance.sortInDescending();
  expect(wrapper.state().existingNumbers).toEqual([7,6,5,4,3,2,1]);
})

it('should be able to refresh the number box', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  wrapper.state().currentNumber = 23456789876;
  instance.refresh();
  expect(wrapper.state().currentNumber).toEqual('xxxxxxxxxx');
});

it('should be able to issue a new number', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.issueNewNumber();
  expect(wrapper.state().existingNumbers.length).toEqual(1);
  expect(wrapper.state().existingNumbers[0].length).toEqual(10);
  instance.issueNewNumber();
  expect(wrapper.state().existingNumbers.length).toEqual(2);
  expect(wrapper.state().existingNumbers[0].length).toEqual(10);
  expect(wrapper.state().highestNumber).not.toEqual(0);
  expect(wrapper.state().lowestNumber).not.toEqual(9999999999);
});

it('should be able to generate a random number', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  let newNo = instance.generateRandomNumber()
  expect(newNo.length).toEqual(10);
});

it('should have necesarry lifecycle methods', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  expect(instance.constructor).toBeDefined();
  expect(instance.render).toBeDefined();
})