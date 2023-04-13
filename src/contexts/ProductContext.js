import React, { createContext, useState, useEffect } from "react";
import data from '../../db.json';

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [])

  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
