import React,{ useContext } from 'react';
//import Link
import { Link } from 'react-router-dom';
// Import icons
import { IoMdArrowForward } from 'react-icons/io';
import {  FiTrash2  } from 'react-icons/fi'

// Import components
import CartItem from '../components/CartItem';
// Import contexts
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  return ( 
    <div className={`${ isOpen ? 'right-0' : '-right-full'} bg-white w-full fixed top-0 h-full
     shadow-2xl md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    
      <div className='flex justify-center items-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex justify-between items-center w-full' >
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>T 
          </div>
          { /* clear cart icon */}
          <div onClick={clearCart}
            className='cursor-pointer bg-red-500 text-white h-12 w-12 flex justify-center items-center text-xl'>
            < FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
