import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

    const ctx = useContext(CartContext) 

    return (
        <Badge badgeContent={ctx.itemsQty()} color="secondary">
            <ShoppingCartOutlined/>
        </Badge>
    )
}
export default CartWidget;