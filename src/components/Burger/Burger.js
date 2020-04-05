import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient type={igKey} key={igKey+index} />
      })
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, [])

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Add ingredients to your burger</p>
    }

  console.log("transformedIngredients", transformedIngredients)
  console.log("transformedIngredients.length", transformedIngredients.length)
 
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;