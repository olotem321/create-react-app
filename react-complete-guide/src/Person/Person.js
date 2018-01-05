import React from 'react';
import './Person.css';
import Redium from 'radium';

const person = (props) => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };

  return (<div style={style} className="Person">
    <h1 onClick={props.click}>Name: {props.name} Age: {props.age}</h1>
    <input type='text' onChange={props.changeName} value={props.name} />
    <p>{props.children}</p>
    </div>);
}

export default Redium(person);
