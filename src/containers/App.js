import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log(`Appjs constructor`);
    this.state = { //reserved word
      persons: [
        { id: '1a', name: 'Hammad', age: 28 },
        { id: '2a', name: 'Hassan', age: 25 },
        { id: '3a', name: 'Murtaza', age: 22 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log(`Appjs getDerivedStateFromProps`, props);
    return state;
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Hassan', age: 25 },
        { name: 'Murtaza', age: 22 },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(e=>e.id==id);
    const person = {...this.state.persons[personIndex]};
    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons: persons})
  }

  togglePersonHandler = (e) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  componentDidMount(){
    console.log(`APPJS componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(`APPJS shouldComponentUpdate`);
    return true;//default
  }

  componentDidUpdate(){
    console.log(`APPJS componentDidUpdate`)
  }

  render() {
    console.log(`Appjs render`)
    let persons = null;
    if(this.state.showPersons){
      persons = (
              <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}/>
      );
    }
    return (
      <div className="App">
        <button onClick={()=>{this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit?
        <Cockpit
          title={this.props.appTitle}
          clicked={this.togglePersonHandler}
          persons = {this.state.persons}
        />:null}
        {persons}
      </div>
    );
  }
}

export default App;
