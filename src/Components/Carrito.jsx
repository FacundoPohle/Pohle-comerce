import { useContext } from "react";
import { CartContext } from "./CartContext";

const Carrito = () => {
      
     const ctx = useContext(CartContext)

  return (
    <div className="row">
    <div className=" carrito">
      <h1>Resumen de tu pedido</h1>
    <ul>
    {
      ctx.cartList.map(item => <li key={item.id}>{item.name} ${item.price}<button onClick={ctx.removeItem}>Delete</button></li>)
    }
    </ul>
    <button onClick={ctx.clear}>Borrar todo</button>
    </div>
  </div>
  )

}

export default Carrito;
