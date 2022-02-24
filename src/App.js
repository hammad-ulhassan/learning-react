import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonByClass from './PersonByClass/PersonByClass';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I am Hammad</h1>
//     </div>
//   );
// }

class App extends Component {
  state = { //reserved word
    persons: [
      { id: '1a', name: 'Hammad', age: 28 },
      { id: '2a', name: 'Hassan', age: 25 },
      { id: '3a', name: 'Murtaza', age: 22 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = "Shahid" //Dont do this //warning do not mutate state directly. dom wont re-render
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
              {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Hassan Murtaza')}
                changed={this.nameChangeHandler}>
                My Hobbies: Racing
              </Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
              {this.state.persons.map((person, personIndex)=>{
                  return <Person
                    name={person.name}
                    age={person.age}
                    click={this.deletePersonHandler.bind(this, personIndex)}
                    key={person.id}
                    changed={(e)=>this.nameChangeHandler(e, person.id)}
                    />
                })}
            </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, Im Hammad Hassan</h1>
        <p>Im learing React</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi I am Hammad Hssan`));
  }
}

export default App;
