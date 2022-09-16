import { useContext } from "react";
import { CartContext } from "./CartContext";

const Carrito = () => {
      
     const myContext = useContext(CartContext)

  return (
    <div className="row">
      <div className=" carrito">RESUMEN DE TU PEDIDO</div>
      <ul>
      {
        myContext.cartList.map(item => <li key={item.id}>{item.name} <button onClick={myContext.removeItem}>Delete</button></li>)
      }
      </ul>
    </div>

  )

}

export default Carrito;
