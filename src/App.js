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

  filterBy(category) {
    this.setState({ currentCategory: category });
  }

  getCategories() { 
    return categories.map( (category) => 
      <Category name= { category } 
                onClickFunction= { this.filterBy.bind(this) } 
      /> 
    )
  }

  getInventory() {
    return inventory
    .filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    })
    .map(({ id, name, category, description, price }) => 
      <Product  id= { id } 
                name= { name } 
                category= { category } 
                description= { description } 
                price= { price} 
      /> 
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
