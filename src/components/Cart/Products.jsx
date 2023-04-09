import React from "react";
import 'tailwindcss/tailwind.css';
import { useState } from "react";

const Product = (props) => {
  const { data, addToCart } = props;
  const [remain, setRemain] = useState(data.remain);

  const handleAddToCart = () => {
    addToCart(data.id);
    setRemain(remain - 1);
  };

  return (
    <>
      <div className="flex w-90% justify-between items-center px-8 py-3 font-Roboto">
        <div>
          <h4 className="text-white">{data.name}</h4>
          <h5 className="font-bold text-white">${data.price}</h5>
        </div>
        <button
          className="bg-yellow-300 text-black font-bold h-10 px-4 rounded cursor-pointer"
          onClick={handleAddToCart}>
          Agregar
        </button>
      </div>
      <hr className="border-gray-500 w-11/12 mx-auto" />
    </>
  );
};

export default Product;