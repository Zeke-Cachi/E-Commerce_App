import { TYPES } from "./Actions"
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "./CartReducer";
import ItemCart from "./ItemCart";
import Products from "./Products";
import React from "react";



const Cart = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const {products, cart,} = state;

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

// deleteAllItems es un booleano - para boton quitar uno es false.
// para quitar todos es true. - VER componente ItemCart
    const deleteFromCart = (id, deleteAllItems) => {
        if (deleteAllItems){
            dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id})
        } else {
        dispatch({type: TYPES.REMOVE_ITEM, payload: id})
    }
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
    };

return (
    <div style={{backgroundColor: "green", display: "flex", flexDirection: "column"}}>
        
        <h1 style={{textAlign: "center", fontSize: "2rem"}}>Carrito de Compras</h1> <br/>
        
        <h2 style={{textAlign: "center", fontSize: "1.5rem"}}>Productos</h2> <br/>
        
        <div style={{backgroundColor: "lightblue", display: "flex", justifyContent: "space-around",alignItems: "center"}}>{products.map((product) => {return <Products key={product.id} data={product} addToCart={addToCart} />})}</div>
        
        <h2 style={{textAlign: "center", fontSize: "1.5rem"}}>Carrito</h2>
        
        <div>{cart.map((item) => {return <ItemCart key={item.id} data={item} deleteFromCart={deleteFromCart} />})}</div>
        
        <br/>
        <button onClick={() => clearCart()}>Limpiar Carrito</button>

    </div>
    
);
};

export default Cart;