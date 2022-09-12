import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

      const onAdd = (qty) => {
            alert("You have selected " + qty + " items.");
      }

      return (
            <>
                  {item && item.image
                        ?
                        <div className="detail-contenedor container  ">
                              <div className="row justify-content-between">
                                    <div className="col-12 col-lg-6 col-xxl-6">
                                          {/* <p>blablalbladbl</p> */}
                                          <img src={item.image} className="detail-contenedor__imagen" alt="imagen producto" />
                                    </div>
                                    <div className="col-12 col-lg-6 col-xxl-6">
                                          <h1 className="detail-contenedor__title">{item.name}</h1>
                                          <p className="detail-contenedor__description">{item.description}</p>
                                          <p className="detail-contenedor__price">${item.price}</p>
                                          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                                    </div>
                              </div>
                        </div>
                        : <p>Cargando...</p>}
            </>
      );
}

export default ItemDetail;