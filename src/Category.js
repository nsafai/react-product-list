import React from 'react'

const Category = ({ name, filterFunction }) => {

  return (
    <li key={name} 
        className="category" 
        onClick={ () => { filterFunction(name) } } 
        >
        <button>{name}</button>
    </li>
  )
}

export default Category