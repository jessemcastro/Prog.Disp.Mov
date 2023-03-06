import React, { useState } from 'react'
import heart from '../../assets/heart.png'
import './product-detail.css'

const ProductDetail = ({product, handleClose}) => {
  const [value, setvalue] = useState(1)
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value);
    }
  return (
    <div className='detail-container'>
        <div className='header'>
            <button className={'closeButton'} onClick={handleClose}>⬅</button>
            <p>Detalhes do produto</p>
            <img src={heart} width={30} height={'100%'} alt='heart'/>
        </div>
        <div className='product'>
            <h3>{product.name}</h3>
            <img src={product.img} width={200} height={'100%'} alt="alt-img" />
        </div>
        <div className='qtt-container'>
            <div>
                <button className='qtt-button'
                    onClick={() => {
                        if(value > 0) {
                            setvalue(value-1)
                        }
                    }}>-</button>
                <input className='input' value={value} min={0} readOnly/>
                <button className='qtt-button' onClick={() => setvalue(value+1)}>+</button>
            </div>
            <p className='price'>
                {formatCurrency(product.price * value)}
            </p>
        </div>
        <div className='product-info-container'>
            <text>⭐ 4.9</text>
            <text>{`🔥 ${product.calories} calorias`}</text>
            <text>⏰ 20 - 30 min</text>
        </div>
        <div className='description-container'>
            <h3>Descrição</h3>
            <p>{product.description}</p>
        </div>
        <div className='buttons-container'>
            <button className='chart-button'>Adicionar ao carrinho</button>
            <button className='buy-button'>Comprar agora</button>
        </div>
    </div>
  )
}

export default ProductDetail;