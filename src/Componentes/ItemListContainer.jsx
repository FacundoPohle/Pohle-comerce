import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemListContainer(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-center">{props.name}</Card.Title>
        <Card.Text className="text-center">
        {props.description}
        </Card.Text>
        <Button variant="danger" className="ms-5">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;