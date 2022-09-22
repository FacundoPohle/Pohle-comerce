import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    
    const addItem = (item) => {
        const aux = ([...cartList, item])
        setCartList(aux);
    }

    const removeItem = (id) => {
       setCartList(cartList.filter(item => item.id !==id));
    }

    const clear = () => {
       setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;