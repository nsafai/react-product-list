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
    return categories.map( (category) => {
      if(category.name === this.currentCategory) {
        return <Category name = { category } 
                onClickFunction = { this.filterBy.bind(this) } 
        />
      } else {
        return <Category name = { category } 
                onClickFunction = { this.filterBy.bind(this) }
                className="selected-category"
        />
      }
    })
  }

  getInventory() {
    return inventory
    .filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    })
    .map(({ id, name, category, description, price }) => 
      <Product  id = { id } 
                name = { name } 
                category = { category } 
                description = { description } 
                price = { price} 
      /> 
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Products</h1>
        
        <p className="helperText">Filter by category:</p>
        
        <ul className="categories">
          <Category name="All" onClickFunction={ this.filterBy.bind(this, null) } />
          { this.getCategories() }        
        </ul>

        <hr></hr>

        <h2 className="headerText">{ this.state.currentCategory || "All Products" }</h2>

        <ul className="products">
          { this.getInventory() }
        </ul>

      </div>
    );
  }
}

export default App;
