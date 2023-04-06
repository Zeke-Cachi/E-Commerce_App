import {TYPES} from "./actions";


export const cartInitialState = {
    products: [
        {id: 1, name: "Product-A", price: 500},
        {id: 2, name: "Product-B", price: 600},
        {id: 3, name: "Product-C", price: 700},
        {id: 4, name: "Product-D", price: 800},
        {id: 5, name: "Product-E", price: 900},
        {id: 6, name: "Product-F", price: 1000},
        {id: 7, name: "Product-G", price: 1100},
        {id: 8, name: "Product-H", price: 1200},
        {id: 9, name: "Product-I", price: 1300}
    ],
    cart: [],
};

export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload);

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === itemInCart.id? {...item, 
                    quantity: item.quantity + 1} : item),
            } : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
            };
        };

        case TYPES.REMOVE_ITEM: {}
        let itemToRemove = state.cart.find((item) => item.id === action.payload)
        return itemToRemove.quantity > 1 
        ? {
            ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload
                    ? {...item, quantity: item.quantity - 1}
                    : item)
        }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        };

        case TYPES.REMOVE_ALL_ITEMS: {
            let itemToRemove = state.cart.find((item) => item.id === action.payload);

            return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)};
        }


        case TYPES.CLEAR_CART: {
            return cartInitialState;
        }

        default:
            return state;

    }
}