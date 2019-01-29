import React from 'react'

const Product = ({ id, name, category, description, price }) => {

  return (
    <li key={ id } className="product">
        <div className="prod-header">
            <p className="prod-category">{ category }</p>
            <h2 className="prod-title">{ name }</h2>   
        </div>
        <p className="prod-price">${ price }</p>
        <p className="prod-description">{ description }</p>
    </li>
  )
}

export default Product