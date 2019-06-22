import React from 'react';
import { Component } from 'react';

import '../App.css';
import Header from './Header';
import NumberFactory from './NumberFactory';
import ListingSection from './ListingSection';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentNumber: 'xxxxxxxxxx',
      highestNumber: 0,
      lowestNumber: 9999999999,
      existingNumbers: [],
    };
    this.issueNewNumber = this.issueNewNumber.bind(this);
    this.refresh = this.refresh.bind(this);
    this.sortInAscending = this.sortInAscending.bind(this);
    this.sortInDescending = this.sortInDescending.bind(this);
  }

  generateRandomNumber() {
    let phoneNumber = '0'
    let digits = 9;
    while(digits > 0) {
      let randomNumber = parseInt(Math.random() * 10);
      phoneNumber += randomNumber;
      digits -= 1;
    }
    return phoneNumber;
  }

  checkIfNumberExists(newNumber) {
    let { existingNumbers } = this.state;
    return existingNumbers.includes(newNumber)
  }

  issueNewNumber() {
    let newNumber = this.generateRandomNumber();
    let currentHighestNumber ;
    let currentLowestNumber ;
    if (!this.checkIfNumberExists(newNumber)) {
      this.state.existingNumbers.push(newNumber);
      let updatedExistingNumbers = this.state.existingNumbers;
      currentHighestNumber = (newNumber > this.state.highestNumber) ? newNumber : this.state.highestNumber;
      currentLowestNumber = (newNumber < this.state.lowestNumber) ? newNumber : this.state.lowestNumber;
      this.setState(state => ({
        ...this.state,
         currentNumber: newNumber,
         existingNumbers: updatedExistingNumbers,
         highestNumber: currentHighestNumber,
         lowestNumber: currentLowestNumber
      }))
    } else {
      this.issueNewNumber()
    }
  }

  refresh() {
    this.setState(state => ({
      ...this.state, currentNumber: 'xxxxxxxxxx'
    }));
  }

  sortInAscending() {
    let numbersInAscending = this.state.existingNumbers.sort();
    this.setState(state => ({
      ...this.state, existingNumbers: numbersInAscending
    }));
  }

  sortInDescending() {
    let numbersInDescending = this.state.existingNumbers.sort().reverse();
    this.setState(state => ({
      ...this.state, existingNumbers: numbersInDescending
    }));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <NumberFactory 
          issueNumber={this.issueNewNumber}
          refresh={this.refresh}
          currentNumber={this.state.currentNumber}
          />
          <ListingSection
          existingNumbers={this.state.existingNumbers}
          lowestNumber={this.state.lowestNumber}
          highestNumber={this.state.highestNumber}
          sortInDescending={this.sortInDescending}
          sortInAscending={this.sortInAscending}
           />
        </div>
      </div>
    );
  }
}

export default App;