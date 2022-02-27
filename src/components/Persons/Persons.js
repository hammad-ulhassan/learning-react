import React, { Component, PureComponent } from 'react';
// import { PureComponent } from 'react/cjs/react.production.min';
import Person from './Person/Person'


export default class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log(`PERSONS JS getDerivedStateFromProps`)
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(`PERSONS JS shouldComponentUpdate`);
    //     if(nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //             || nextProps.clicked !== this.props.click){
    //         //if persons prop is changed, then render
    //         return true;
    //     }
    //     //if persons prop is unchanged, then no need to render
    //     return false;
    // }

    componentWillUnmount(){
        //right before this component is removed
        console.log(`[PERSONS JS] componentWillUnmount`)
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