import 'tailwindcss/tailwind.css';
import React from "react";

const ItemCart = (props) => {
    const {data, deleteFromCart} = props;

    return (
        <>
            <div className='font-Roboto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-8 text-center gap-2'>
                <h4 className='text-white'>{data.name}</h4>
                <h5 className='font-bold text-white'>${data.price}</h5>
                <h5 className='text-white'>Cantidad: {data.quantity}</h5>
                <h5 className='text-white'>Subtotal: ${data.price*data.quantity}</h5>
                <button className="bg-yellow-300 text-black font-bold py-1 px-2 my-1 rounded w-28 cursor-pointer mx-auto" onClick={() => deleteFromCart(data.id, false)}>Quitar uno</button>
                <button className="bg-yellow-300 text-black font-bold py-1 px-2 my-1 rounded w-28 cursor-pointer mx-auto" onClick={() => deleteFromCart(data.id, true)}>Quitar todos</button>
            </div>
            <hr className="border-gray-500 w-11/12 mx-auto my-5"/>
        </>
    );
}

export default ItemCart;