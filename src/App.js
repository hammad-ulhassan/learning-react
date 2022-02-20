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
    ],
    otherState:'some other value'
  }

  switchNameHandler = (newName) =>{
    // console.log('Was clicked!');
    // this.state.persons[0].name = "Shahid" //Dont do this //warning do not mutate state directly. dom wont re-render
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Hassan', age: 25},
        {name: 'Murtaza', age: 22},
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name: 'Lol', age:41},
        {name: event.target.value, age: 32},
        {name: 'Khizer', age:54}
      ]
    })
  }


  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, Im Hammad Hassan</h1>
        <p>Im learing React</p>
        <button
          style={style}
          onClick={()=>this.switchNameHandler('Agha Hammad')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Hassan Murtaza')}
          changed={this.nameChangeHandler}>
            My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi I am Hammad Hssan`));
  }
}

export default App;
