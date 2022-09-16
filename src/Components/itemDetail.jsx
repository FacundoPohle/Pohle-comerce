import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
      const [itemCount, setItemCount] = useState(0);
     
      const {addItem} = useContext(CartContext)
      
      const onAdd = (qty) => {
            alert("You have selected " + qty + " items.");
            setItemCount(qty);
            addItem(item);
      }

      return (
            <>
                  {item && item.image
                        ?
                        <div className="detail-contenedor container  ">
                              <div className="row justify-content-between">
                                    <div className="col-12 col-lg-6 col-xxl-6">
                                          <img src={item.image} className="detail-contenedor__imagen" alt="imagen producto" />
                                    </div>
                                    <div className="col-12 col-lg-6 col-xxl-6">
                                          <h1 className="detail-contenedor__title">{item.name}</h1>
                                          <p className="detail-contenedor__description">{item.description}</p>
                                          <p className="detail-contenedor__price">${item.price}</p>
                                          {     itemCount === 0 
                                               ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                               :<Link to="/cart">Ir al carrito</Link>
                                          } 
                                    </div>
                              </div>
                        </div>
                        : <p>Cargando...</p>}
            </>
      );
}

export default ItemDetail;