import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from "firebase/firestore";
import { db } from '../Utils/firebaseConfig';

const Carrito = () => {

  const ctx = useContext(CartContext)

  const createOrder = async () => {
    let itemsForDB = ctx.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
      quantity: item.qtyItem
    }))
    let order = {
      buyer: {
        name:"Facundo Pohle",
        email: "facundopohle@gmail.com",
        phone: "3515630626"
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: ctx.calcTotal()
    }
    
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order);
    alert('Your order has been created. ID Number:' + newOrderRef.id)
    ctx.clear();
    itemsForDB.map( async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity)
      });
    })
  }

  return (
    <div>
      <div>
        <Link className="carrito__continue" to="/">continuar comprando</Link>
        {
          (ctx.cartList.length > 0)
            ? <button className="carrito__clear" onClick={ctx.clear}>Borrar todo</button>
            : <div className="carrito__nada">No hay productos en el carrito</div>
        }
      </div>
      <div>
        <div className="carrito">
            {ctx.cartList.map(item =>
              <div key={item.idItem}>
                <img src={item.imgItem} className="carrito__imagen" alt="imagen-producto" />
                <span className="carrito__item">{item.nameItem}</span>
                <span className="carrito__precio">${ctx.totalPorItem(item.idItem)}</span>
                <span className="carrito__cantidad">Cantidad:{' '}{item.qtyItem}{' '}{item.costItem}{' c/u'}</span>
                <button className="carrito__remove" onClick={() => ctx.removeItem(item.idItem)}>Delete</button>
              </div>)
            }
        </div>
        {
          ctx.cartList.length > 0 &&
          <div className="sumario">
          <h2 className="sumario__title">Sumario de pedidos</h2>
          <div>
            <p>Subtotal: ${ctx.calcSubTotal()}</p>
            <p>IVA 21%: ${ctx.calcIva()}</p>
            <p>Total: ${ctx.calcTotal()}</p>
          </div>
          <div>
            <button onClick={createOrder} className="carrito__checkout">Finalizar compra</button>
          </div>
        </div>
        }
      </div>
    </div>
  )

}

export default Carrito;
