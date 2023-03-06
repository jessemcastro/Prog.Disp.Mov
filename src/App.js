import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import {Product} from './components/product/product'
import burguer from './assets/burguer.png'
import pancake from './assets/pancake.png'
import berrypancake from './assets/berrypancake.png'
import ProductDetail from './components/product-detail/product-detail';


const productsList = [
  {
    name: 'Beef burguer', 
    calories: 70,
    price: 12.00,
    description: 'Awesome beef burguer',
    img: burguer
  },
  {
    name: 'Pancakes', 
    calories: 60,
    price: 15.00,
    description: 'Awesome pancakes',
    img: pancake
  },
  {
    name: 'Blueberry and raspberry pancakes', 
    calories: 70,
    price: 15.00, 
    description: 'Awesome blueberry and raspberry pancakes', 
    img: berrypancake
  }
]

function App() {
  const [products, setProducts] = useState(productsList);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
        <h3>Produtos</h3>
        <div className='products-list'>
          {products.map((p) => {
            return (
              <Product key={p.name} product={p} handleClick={() => setSelectedProduct(p)}/>
              );
            })}
        </div>
        {selectedProduct && 
          <div>
            Detalhes 
            <ProductDetail product={selectedProduct} handleClose={() => setSelectedProduct(null)} />
          </div>
        }
    </div>
  );
}

export default App;
