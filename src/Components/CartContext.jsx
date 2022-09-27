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
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {

            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !==id);
       setCartList(result);
    }

    const clear = () => {
       setCartList([]);
    }
    
    const totalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => totalPorItem(item.idItem));
        return totalPerItem.reduce((primerValor, segundoValor) => primerValor + segundoValor);
    }

    const calcIva = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcIva();
    }

    const itemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((primerValor, segundoValor) => primerValor + segundoValor), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, totalPorItem, calcSubTotal, calcIva, calcTotal, itemsQty}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;