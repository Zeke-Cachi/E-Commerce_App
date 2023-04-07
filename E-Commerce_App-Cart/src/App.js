import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './components/Cart';
import { FaTimes } from 'react-icons/fa';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  function toggleCart() {
    setCartVisibility(!cartVisibility);
  }

  return (
    <div>
      <div onClick={toggleCart}>
        {cartVisibility ? <FaTimes /> : <FaShoppingCart />}
      </div>
      {cartVisibility && <Cart />}
    </div>
  );
}

export default App;