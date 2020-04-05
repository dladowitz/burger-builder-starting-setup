import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0, 
      meat: 0,
    }
  }

  handleIngredientAdd (operation, ingredient) {
    console.log("handleIngredientAdd called with: ", operation, ingredient)
    let newIngredients = this.state.ingredients;
    let count = this.state.ingredients[ingredient]
    
    if(operation === 'add') {
      count++
    } else if(operation === 'subtract' && count > 0) {
      count--
    }

    newIngredients[ingredient] = count

    this.setState({ ingredients: newIngredients })
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientList={Object.keys(this.state.ingredients)}
          clicked={(operation, ingredient) => this.handleIngredientAdd(operation, ingredient)}/>
      </Aux>
    );
  }  
}

export default BurgerBuilder;
