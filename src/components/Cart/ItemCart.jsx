
import React from "react";

const ItemCart = (props) => {
    const {data, deleteFromCart} = props;

    return (
        <div style={{display: "flex",  justifyContent: "space-between"}}>
            <h4>{data.name}</h4>
            <h5>$ {data.price}</h5>
            <h5>{data.quantity}u</h5>
            <h5>Subtotal: {data.price*data.quantity}</h5>
            <button onClick={() => deleteFromCart(data.id, false)}>Quitar uno</button>
            <button onClick={() => deleteFromCart(data.id, true)}>Quitar todos</button>
        </div>
    );
}

export default ItemCart;