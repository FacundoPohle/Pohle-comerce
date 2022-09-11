import { useEffect, useState } from "react";
import customFetch from "../Utils/promesa";
import ItemDetail from "./itemDetail";
import dataFromBD from "../Utils/productos";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, dataFromBD[3])
           .then(result => setDato(result))
           .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;