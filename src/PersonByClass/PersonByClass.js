import React from 'react';
import {Component} from 'react';

class PersonByClass extends Component{
    render(){
        return (
            <div>
                <p>Hi Iam {this.props.name} By Class. I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default PersonByClass;