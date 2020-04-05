import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
  const buttons = props.ingredientList.map((ingredient) => {
    return <BuildControl 
      ingredient={ingredient} 
      key={ingredient} 
      clicked={props.clicked}/>
  });

  return (
    <div className={classes.BuildControls}>
      <div>I'm the Build Controls Section</div>
      {buttons}
    </div>
  )
};

export default buildControls;
