import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        setCartList([...cartList, product])
    }

    const removeItem = (id) => {
       alert ('producto deleted')
    }

    const clear = () => {

    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;