import React from 'react'

const Category = ({ name, onClickFunction }) => {

  return (
    <li key={name} 
        className="category" 
        onClick={ () => { onClickFunction(name) } } 
        >
        <button>{name}</button>
    </li>
  )
}

export default Category