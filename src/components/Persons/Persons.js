import React, { Component } from 'react';
import Person from './Person/Person'


export default class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log(`PERSONS JS getDerivedStateFromProps`)
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`PERSONS JS shouldComponentUpdate`)
        return true;
    }


    
    render() {
        console.log(`PersonsJS rendering...`);
        return this.props.persons.map((person, personIndex) => {
            return (<Person
                name={person.name}
                age={person.age}
                click={this.props.clicked.bind(this, personIndex)}
                key={person.id}
                changed={(e) => this.props.changed(e, person.id)}
            />);
        });
    };

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`PERSONS JS getSnapshotBeforeUpdate`);
        return {message: `Snapshot!`};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`PERSONS JS componentDidUpdate`);
        console.log(snapshot)
    }
}