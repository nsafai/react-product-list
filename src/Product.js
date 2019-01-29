import React from 'react'

const Product = ({ id, name, description, price }) => {

  return (
    <div key={id} className="product">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>${price}</p>
    </div>
  )
}

export default Product