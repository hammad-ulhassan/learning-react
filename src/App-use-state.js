import { useState } from "react";
import Person from './Person/Person';
import PersonByClass from './PersonByClass/PersonByClass';
import './App.css';

const App = props => {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Hammad', age: 13 },
            { name: 'Hassan', age: 23 },
            { name: 'Murtaza', age: 33 },
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personState, otherState);
    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // this.state.persons[0].name = "Shahid" //Dont do this //warning do not mutate state directly. dom wont re-render
        setPersonState({
            persons: [
                { name: 'Agha Hammad', age: 28 },
                { name: 'Hassan', age: 25 },
                { name: 'Murtaza', age: 22 },
            ]
        })
    }

    return (
        <div className="App">
            <h1>Hi, Im Hammad Hassan</h1>
            <p>Im learing React</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} />
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age} />
            <PersonByClass name="Hammad" age="46">Mera naam Joker</PersonByClass>
            <PersonByClass name="Hammad" age="46">Kashi chchoo Mantar</PersonByClass>
        </div>
    );
}

export default App;