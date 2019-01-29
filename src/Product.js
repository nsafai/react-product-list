import React from 'react'

const Product = ({ id, name, category, description, price }) => {

  return (
    <div key={ id } className="product">
        <h1>{ name }</h1>
        <h4>{ category }</h4>
        <p>{ description }</p>
        <p>${ price }</p>
        
    </div>
  )
}

export default Product