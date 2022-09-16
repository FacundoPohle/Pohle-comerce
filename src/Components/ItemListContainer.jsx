import ItemList from './itemList';
import customFetch from '../Utils/promesa';
import dataFromBD from '../Utils/productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {

    if(idCategory){
      customFetch(2000, dataFromBD.filter(item => item.categoryId == idCategory))
        .then(result => setData(result))
        .catch(err => console.log(err))
    } else {
      customFetch(2000, dataFromBD)
      .then(result => setData(result))
      .catch(err => console.log(err))
    }
      
  }, [idCategory]);
  return (
    <div className="row justify-content-around">
      <ItemList items={ data } />
    </div>
  );
}

export default ItemListContainer;
