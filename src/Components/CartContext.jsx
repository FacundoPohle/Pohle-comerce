import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        setCartList([...cartList, product]);
    }

    const removeItem = (id) => {
       setCartList(cartList.filter(item => item.id !==id));
    }

    const clear = () => {
       setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;