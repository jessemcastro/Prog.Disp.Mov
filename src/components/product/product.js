import React from 'react'
import "./product.css"

export const Product = ({product, handleClick}) => {
  return (
     <div className='main-container' onClick={handleClick}>
      <div className='info-container'>
        <h3>
          {product.name}
        </h3>
          {`${product.calories} calories`}
        <p className='calories'>
          {`R$ ${product.price}`}
        </p>
      </div>
      <img src={product.img} width={200} height={'100%'} alt="alt-img" />
    </div>
  )
}
