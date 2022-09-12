import ItemList from './itemList';
import customFetch from '../Utils/promesa';
import dataFromBD from '../Utils/productos';
import { useState, useEffect } from 'react';


function ItemListContainer() {
  const [data, setData] = useState([])

  //componentDidMount
  useEffect(() => {
      // aqui hago lo que quiero hacer cuando el componente se monte en el DOM
      // en este caso, consulto a la BD
      customFetch(2000, dataFromBD)
        .then(datos => setData(dataFromBD))
        .catch(err => console.log(err))
  }, []);
  return (
    <div className="row justify-content-around">
      <ItemList items={ data } />
    </div>
  );
}

export default ItemListContainer;
