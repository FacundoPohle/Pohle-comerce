import { useEffect, useState } from "react";
// import customFetch from "../Utils/promesa";
import ItemDetail from "./itemDetail";
// import dataFromBD from "../Utils/productos";
import { useParams } from "react-router-dom";
import { db } from '../Utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();


    useEffect(() => {
        async function fetchData() {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
                console.log('no such document')
            }
            setDato(docSnap)
        }

        fetchData();
    }, [idItem]);


    // useEffect(() => {
    //     console.log(idItem, dataFromBD)
    //     customFetch(2000, dataFromBD.find(item => item.id === parseInt(idItem)))
    //        .then(result => setDato(result))
    //        .catch(err => console.log(err))
    // }, [idItem]);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;