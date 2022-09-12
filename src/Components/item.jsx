import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function Item({image, name, description, price, stock}) {

  const onAdd = (qty) => {
        alert(`you have selected ${qty} items`)
  }

  return (
    <div className='col-12 col-lg-3 col-xxl-3'>
      <Card style={{ width: '18rem', margin: '2rem', padding: '1rem' }} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">
        {description}
        </Card.Text>
        <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item;