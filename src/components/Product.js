import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
   <div>
    <div className='border border-[#e4e4e4] 
    h-[300px] mb-4 relative 
    overflow-hidden group 
    transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* image */}
        <div className='w-[200px] flex mx-auto justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
        </div>
      </div>
      {/* buttons */}
      <div className='absolute top-6 -right-11 group-hover:right-5 
        flex flex-col items-center gap-y-2 opacity-0 p-2 
        group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCart(product,id)}>
          <div className='flex items-center justify-center text-white h-12 w-12 bg-red-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link className='flex items-center justify-center bg-white text-primary h-12 w-12 drop-shadow-xl'
        to={`product/${id}`}>
          <BsEyeFill />
        </Link>
      </div>
    </div>
    { /* Category & Title & Price */ }
    <div>
      <div className='capitalize text-sm text-gray-500 '>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </ Link>  
      <div className='font-bold'>$ {price}</div>
    </div>
  </div>
  )
};

export default Product;
