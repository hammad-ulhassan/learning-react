//functional component
import React , {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component{
    render(){
        console.log(`PERSON JS RENDERING...`)
        return (
            // <div className="Person">
            // <Aux>
            <React.Fragment>
                <p key="i1" onClick={this.props.click}>
                    Im {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" 
                onChange={this.props.changed} 
                value={this.props.name}>
                </input>
            {/* // </Aux> */}
            </React.Fragment>
        );
    }
};


export default Person;