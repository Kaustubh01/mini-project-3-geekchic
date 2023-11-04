// ProductPage.js
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/products/ProductContext'
import tshirt from '../images/example.jpeg'



function Product() {
  const products = useProducts();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div style={{
      display: "inline-flex",
    }}>
      <img src={tshirt} alt="" style={{
        height: "500px",
        width: "400px",
      }} />
      <div className='desc' style={
        {
          paddingLeft: "200px",
          paddingTop: "100px",
        }
      }>
        <h2>{product.name}</h2>
        <p>Price: {product.price} Rs</p>
        <p>
          Material: Cotton <br />
          Size: M <br />
        </p>
        <Link to='/buy' style={
          {
            backgroundColor: "#1E90FF",
            color: "white",
            height: "50px",
            width: "100px",
            borderRadius: "5px",
            fontSize: "20px",
            padding: "0 60px",
          }
        }>Buy</Link>
      </div>


    </div>
  );
}

export default Product;
