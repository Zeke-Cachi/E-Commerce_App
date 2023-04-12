import Cart from "./Cart"
import React from "react"
import 'tailwindcss/tailwind.css';


const CartIcon = ({cart, deleteFromCart, clearCart}) => {
  return (
    <Cart cart={cart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
  )
}

export default CartIcon