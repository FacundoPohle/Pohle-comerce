import Item from '../Components/item';

const ItemList = ({items}) => {

    return (
        <>
            {
                items.length ?
                items.map(obj => (
                    <Item
                         key={obj.id}
                         id={obj.id}
                         image={obj.image}
                         name={obj.name}
                         description={obj.description}
                         stock={obj.stock}
                         />
                    ))
                    : <p>Cargando..</p>
                }
        </>
    );
}

export default ItemList;