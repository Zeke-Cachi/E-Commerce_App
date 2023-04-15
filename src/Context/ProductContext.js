import React, {createContext, useState, useEffect} from 'react';
export const ProductContext = createContext();

const ProductProvider = (props)=> {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('https://fakestoreapi.com/products')
            const data = await response.json();
            setProducts(data);
        };
        fetchData();
    }, []);
    return (
        <ProductContext.Provider value = {{products}}>
        {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;