import { TYPES } from "./Actions"
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "./CartReducer";
import ItemCart from "./ItemCart";
import Products from "./Products";
import React from "react";
import 'tailwindcss/tailwind.css';



const Cart = ({showCart}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const {products, cart,} = state;

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

// deleteAllItems es un booleano - para boton quitar uno es false.
// para quitar todos es true. - VER componente ItemCart
    const deleteFromCart = (id, deleteAllItems) => {
        deleteAllItems ? dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id}) : dispatch({type: TYPES.REMOVE_ITEM, payload: id})
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
    };



    return (
        
        <div id="cart" className="relative w-full">
            <div className={`absolute w-10/12 opacity-${showCart ? "100" : "0"} transition-opacity duration-500 min-h-300p bg-gray-800 w-1/3 mx-auto absolute top-20 left-1/2 transform -translate-x-1/2 z-50 rounded-md w-5/6`}>
                
                <h1 className="text-4xl text-center py-1 font-Roboto text-white">Productos</h1> 
                
                <div>{products.map((product) => {return <Products key={product.id} data={product} addToCart={addToCart} />})}</div>
                
                <h2 className="text-center font-Roboto text-3xl text-white mt-4">Carrito</h2>
                
                <div>{cart.map((item) => {return <ItemCart key={item.id} data={item} deleteFromCart={deleteFromCart} />})}</div>
                
                <div className="w-full text-center">
                    <button className="bg-yellow-300 text-black font-bold py-1 px-4 rounded my-8 cursor-pointer " onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>

            </div>
        </div>

        
    );
};

export default Cart;