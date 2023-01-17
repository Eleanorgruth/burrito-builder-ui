import React, { Component } from 'react';


class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name && this.state.ingredients.length > 0) {
      this.props.addOrder(this.state)
      this.clearInputs();
    }
  }
  giveUserError = () => {
    if(this.state.name && this.state.ingredients.length > 0) {
      return
    } else {
      return (
        <p>Please enter a name and select at least one ingredient.</p>
      )
    }
  }
  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]})
  }
  handleNameChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button
          key={ingredient}
          name={ingredient}
          onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        {this.giveUserError()}
        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
