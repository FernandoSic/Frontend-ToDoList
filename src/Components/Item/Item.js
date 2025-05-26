import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Nombre de la tarea.
        </Card.Text>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          Descripción de la tarea.
        </Card.Text>
        <Card.Title>Due Date</Card.Title>
        <Card.Text>
          31/12/2023
        </Card.Text>
        <Button variant="remover">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;