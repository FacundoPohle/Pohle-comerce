import ItemList from './itemList';
// import customFetch from '../Utils/promesa';
// import dataFromBD from '../Utils/productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Utils/firebaseConfig';
import { query, orderBy, where, collection, getDocs } from "firebase/firestore";


function ItemListContainer() {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    // if(idCategory){
    //   customFetch(2000, dataFromBD.filter(item => item.categoryId === parseInt(idCategory)))
    //     .then(result => setData(result))
    //     .catch(err => console.log(err))
    // } else {
    //   customFetch(2000, dataFromBD)
    //   .then(result => setData(result))
    //   .catch(err => console.log(err))
    // }   
    async function fetchData() {
      let item;
      if (idCategory) {
        item = query(collection(db, "products"), where('categoryId', '==', idCategory));
      } else {
        item = query(collection(db, "products"), orderBy('name'));
      }
      const querySnapshot = await getDocs(item);
  const dataFromFirestore = querySnapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
  }))
  setData(dataFromFirestore)
}
fetchData();
  }, [idCategory]);

// useEffect(() => {
//   return (() => {
//     setData([]);
//   })
// }, [])


return (
  <div className="row justify-content-around">
    <ItemList items={data} />
  </div>
);
}

export default ItemListContainer;
