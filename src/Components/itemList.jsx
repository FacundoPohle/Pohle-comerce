import { useState, useEffect } from 'react'
import Item from '../Components/item';
import customFetch from '../Utils/promesa';
import dataFromBD from '../Utils/productos';

const ItemList = () => {
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
        <>
            {
                data.length ?
                data.map(obj => (
                    <Item
                         key={obj.id}
                         image={obj.image}
                         name={obj.name}
                         description={obj.description}
                         />
                    ))
                    : <p>Cargando..</p>
                }
        </>
    );
}

export default ItemList;