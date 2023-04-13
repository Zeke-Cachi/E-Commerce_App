import React,{ useContext }  from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdRemove, IoMdTrash } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';



const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount} = item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500 w-full'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        { /* image */ }
        <Link to={ `/product/${id}` }>
          <img src={image} alt={title} className='max-w-[80px]' />
        </Link>
        <div className='flex flex-col w-full'>
          { /* title & remove icon*/ }
          <div className='flex mb-2 justify-between'>
            { /* title */ }
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px]
              text-primary hover:underline'>{title}</Link>
            { /* remove icon */ }  
            <div onClick={() => removeFromCart(id)} className='text-2xl cursor-pointer'>
              <IoMdTrash className='text-gray-900 hover:text-red-500 transition '/>
            </div>
          </div>
          <div className='flex h-[36px] gap-x-2 text-sm'> 
            { /* quantity */ }
            <div className='flex items-center flex-1 max-w-[100px] h-full border text-primary font-medium'>
              { /* minus icon */ }
              <div onClick={() => decreaseAmount(id)}
                className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                <IoMdRemove  />
              </div>
              { /* amount */ }
              <div className='h-full flex justify-center px-2 items-center'>
                {amount}
              </div>
              { /* plus icon */ }
              <div onClick={()=> increaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            { /* item price */ }
            <div className='flex flex-1 items-center justify-around'>{parseFloat(price).toFixed(2)}</div>
            { /* final price */ }
            <div className='flex flex-1 justify-end items-center text-primary font-medium'>
              {`$ ${ parseFloat(price * amount).toFixed(2)  }`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
