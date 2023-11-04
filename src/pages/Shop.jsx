import React from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/products/ProductContext'
import tshirt from '../images/example.jpeg'


function Shop() {

  const products = useProducts();
  console.log(products);

  return (
    <>
        <ul>
        {products.map((product) => (
          <li key={product.id}><Link to={`/product/${product.id}`}><div style={
            {
              backgroundColor: "lightblue",
              height: "400px",
              width: "250px",
              border: "1px solid black",
              textAlign: "center",
            }
          } > <img src={tshirt} style={{
            height: "300px",
            width: "250px",
          }} alt="" /> {product.name} <br />{product.price} Rs</div> </Link></li>
        ))}
      </ul>
        
    </>
  )
}

export default Shop