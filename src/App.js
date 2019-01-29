import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

import Category from './Category';
import Product from './Product';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCategory: null,
    }
  }

  clickCategory(cat) {
    console.log('inside click category');
    this.setState({ currentCategory: cat });
  }

  getCategories() { 
    return categories.map( (cat) => 
      <Category name={cat} filterFunction={ this.clickCategory.bind(this) } /> 
    )
  }

  getInventory() {
    return inventory.map(({ id, name, description, price }) => 
      <Product id={id} name={name} description={description} price={price} /> 
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>
        <p>Current category: { this.state.currentCategory }</p>

        <ul>
          { this.getCategories() }
        </ul>

        <ul>
          { this.getInventory() }
        </ul>

      </div>
    );
  }
}

export default App;
