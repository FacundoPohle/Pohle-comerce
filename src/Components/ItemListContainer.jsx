import ItemList from './itemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Utils/firebaseConfig';
import { query, orderBy, where, collection, getDocs } from "firebase/firestore";


function ItemListContainer() {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    async function fetchData() {
      let item;
      if (idCategory) {
        item = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)));
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

  return (
    <div className="row justify-content-around">
      <ItemList items={data} />
    </div>
  );
}

export default ItemListContainer;
