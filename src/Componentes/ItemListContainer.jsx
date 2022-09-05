import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


function ItemListContainer({image, name, description}) {

  return (
    <Card style={{ width: '18rem', margin: '2rem', padding: '1rem' }} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">
        {description}
        </Card.Text>
        <ItemCount stock={5} initial={0}/>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;
