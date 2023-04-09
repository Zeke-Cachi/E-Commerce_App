import Cart from "./Cart"
import React from "react"
import 'tailwindcss/tailwind.css';


const CartIcon = ({showCart}) => {
  return (
    <Cart showCart={showCart}/>
  )
}

export default CartIcon