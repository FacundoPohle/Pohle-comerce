import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({image, name, description, id}) {

  return (
    <div className='col-12 col-lg-3 col-xxl-3'>
      <Card style={{ width: '18rem', margin: '2rem', padding: '1rem' }} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">
        {description}
        </Card.Text>
        <Link to={`/item/${id}`}> Detail</Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item;