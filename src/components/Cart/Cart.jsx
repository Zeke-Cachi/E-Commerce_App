import ItemCart from "./ItemCart";
import 'tailwindcss/tailwind.css';



const Cart = ({cart, deleteFromCart, clearCart}) => {

    return (
        
        <div id="cart" className={`relative w-full opacity-100 transition-opacity duration-500`}>
            <div className="absolute w-10/12 min-h-300p w-1/3 bg-gray-800 mx-auto absolute top-20 left-1/2 transform -translate-x-1/2 z-50 rounded-md w-5/6">
                
                <h1 className="text-4xl text-center py-1 font-Roboto text-white">Productos</h1> 
                
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