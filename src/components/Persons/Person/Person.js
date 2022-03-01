//functional component
import React , {Component} from 'react';
import { PropTypes } from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }


    componentDidMount(){
        /**
         * runs after render
         */
        // this.inputElement.focus()
        this.inputElementRef.current.focus();
    }


    render(){
        console.log(`PERSON JS RENDERING...`)
        return (
            // <div className="Person">
            // <Aux>
            <React.Fragment>
                {this.props.isAuth ? <p>Auth</p>:<p>PLease Login</p>}
                <p key="i1" onClick={this.props.click}>
                    Im {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" 
                // ref={(inputEl)=>{this.inputElement = inputEl}}
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}>
                </input>
            {/* // </Aux> */}
            </React.Fragment>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default Person;