import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import withSmallClass from "../hoc/withsmallClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-conext";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`Appjs constructor`);
    this.state = {
      //reserved word
      persons: [
        { id: "1a", name: "Hammad", age: 28 },
        { id: "2a", name: "Hassan", age: 25 },
        { id: "3a", name: "Murtaza", age: 22 },
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Appjs getDerivedStateFromProps`, props);
    return state;
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Hassan", age: 25 },
        { name: "Murtaza", age: 22 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((e) => e.id == id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // this.setState({persons: persons, changeCounter: this.state.changeCounter+1})
    /**the above approach can give us any state because setState is async so we use callback for this*/
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonHandler = (e) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  componentDidMount() {
    console.log(`APPJS componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`APPJS shouldComponentUpdate`);
    return true; //default
  }

  componentDidUpdate() {
    console.log(`APPJS componentDidUpdate`);
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log(`Appjs render`);
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    //trying HOC with classes
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              clicked={this.togglePersonHandler}
              personsLength={this.state.persons.length}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withSmallClass(App, "App");
