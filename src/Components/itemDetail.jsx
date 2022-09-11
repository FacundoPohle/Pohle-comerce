import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

      const onAdd = (qty) => {
            alert("You have selected " + qty + " items.");
      }

      return (
            <>
                  {item && item.image
                        ?
                        <div className="detail-contenedor">
                              <h1 className="detail-contenedor__title">{item.name}</h1>
                              <img src={item.image} className="detail-contenedor__imagen" />
                              <p>{item.description}</p>
                              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        </div>
                        : <p>Cargando...</p>}
            </>
      );
}

export default ItemDetail;