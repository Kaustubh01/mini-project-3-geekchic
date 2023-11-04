// productsContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API using a GET request and update the state.
    // Replace 'your-api-url' with the actual API endpoint.
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
