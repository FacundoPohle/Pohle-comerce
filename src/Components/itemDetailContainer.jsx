import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../Utils/firestoreFetch";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();


    useEffect(() => {
         firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    });

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;