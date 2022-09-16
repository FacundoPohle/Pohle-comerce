import { useEffect, useState } from "react";
import customFetch from "../Utils/promesa";
import ItemDetail from "./itemDetail";
import dataFromBD from "../Utils/productos";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        console.log(idItem, dataFromBD)
        customFetch(2000, dataFromBD.find(item => item.id === parseInt(idItem)))
           .then(result => setDato(result))
           .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;