import React, { useEffect } from 'react'
import axios from "axios"
import { useEffect, useState } from "react"


const Products = () => {
    const [products,setProducts] = useState([])
    useEffect( () => {
        axios
        .get("http://localhost:5000/products")
        .then( (res)=>{ setProducts(res.data)
        .catch((err) => console.log(err))
    },[])
    })
    return (
    <div>
        {products.map((product)=>(
            <div key={product.id} className="product-card">
            <img src={products.image}/>
            <h2>{products.title}</h2>
            <p>products.price</p>
            <button>Add to cart</button>
    </div>
        ))}
    </div>
    )
}

export default Products