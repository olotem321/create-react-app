import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'1', name:'Jboi', age: 23},
      {id:'2', name:'TimK', age: 27},
      {id:'3', name:'Alim', age: 24}
    ],
    checkBtn: true
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNamehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleBtn = () => {
    const currentState = this.state.checkBtn;
    this.setState({
      checkBtn: !currentState
    })
  }

  render() {
    const style={
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{ //use by Radium
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let person = null;

    if(this.state.checkBtn){
      person = (<div>
      {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changeName={(event) => this.changeNamehandler(event, person.id)}
          />
        })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = { //use by Radium
        backgroundColor: 'salmon',
        color: 'white'
      }


    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>From React app</h1>
        <p className={classes.join(' ')}>Say hey!</p>
        <button
          style={style}
          onClick={this.toggleBtn} >
          ChangeName
        </button>

          {person}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
