import React from 'react'

const Category = ({ name, onClickFunction, currentCategory }) => {
  if(currentCategory === name) {
    return (
      <li key={name} 
          className="category"
          onClick={ () => { onClickFunction(name) } } 
          >
          <button className="selected-category">{name}</button>
      </li>
    )
  } else {
    return (
      <li key={name} 
          className="category"
          onClick={ () => { onClickFunction(name) } } 
          >
          <button>{name}</button>
      </li>
    )
  }
}

export default Category