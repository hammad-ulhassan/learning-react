import React, {Component} from 'react';
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

class App extends Component{
  state = { //reserved word
    persons: [
      {name: 'Hammad', age: 28},
      {name: 'Hassan', age: 25},
      {name: 'Murtaza', age: 22},
    ]
  }

  switchNameHandler = () =>{
    // console.log('Was clicked!');
    // this.state.persons[0].name = "Shahid" //Dont do this
    this.setState({
      persons: [
        {name: 'Agha Hammad', age: 28},
        {name: 'Hassan', age: 25},
        {name: 'Murtaza', age: 22},
      ]
    })
  }


  render(){
    return (
      <div className="App">
        <h1>Hi, Im Hammad Hassan</h1>
        <p>Im learing React</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <PersonByClass name="Hammad" age="46">Mera naam Joker</PersonByClass>
        <PersonByClass name="Hammad" age="46">Kashi chchoo Mantar</PersonByClass>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi I am Hammad Hssan`));
  }
}

export default App;
