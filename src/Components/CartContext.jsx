import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    
    const addItem = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.id !==id);
       setCartList(result);
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