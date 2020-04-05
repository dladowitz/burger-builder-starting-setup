import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div>
    {props.ingredient}
    <button
      className={classes.BuildControl}
      onClick={() => props.clicked('add', props.ingredient)}>+</button>
    <button
      className={classes.BuildControl}
      onClick={() => props.clicked('subtract', props.ingredient)}>-</button>      
  </div>
  
);


export default buildControl;
