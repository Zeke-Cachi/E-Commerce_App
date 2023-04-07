import React from "react";

const Product = (props) => {
    const {data, addToCart} = props;
  return (
    <div>
        <h4>{data.name}</h4>
        <h5>$ {data.price}</h5>
        <button onClick={()=>addToCart(data.id)}>Agregar</button>
    </div>
  );
}

export default Product;
