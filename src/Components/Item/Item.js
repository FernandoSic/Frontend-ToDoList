import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { CardBody } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeToDo } from '../../reducers/toDoSlice';

function Item(props) {
  const dispatch = useDispatch();
  
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeToDo(props.name));
  }

  


  return (
    <Card>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          {props.name}
        </Card.Text>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Title>Due Date</Card.Title>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
      </Card.Body>
      <CardBody>
        <Button variant="info">Editar</Button>
        <Button variant="info" onClick={removeItem}>Remover</Button>
      </CardBody>
    </Card>
  );
}

export default Item;