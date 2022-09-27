import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({image, name, description, id}) {

  return (
    <div className='col-12 col-lg-3 col-xxl-3'>
      <Card className=" item" >
      <Card.Img className='item__image' variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center item__description">{name}</Card.Title>
        <Card.Text className="text-center item__description">
        {description}
        </Card.Text>
        <Link to={`/item/${id}`}>Let´s go!</Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item;