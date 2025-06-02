import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { CardBody } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeToDo } from '../../reducers/toDoSlice';
import { removeGoal } from '../../reducers/goalsSlice';


function Item(props) {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.option.value);
  
  const removeItem = (e) => {
    e.preventDefault();
    if (option === 'goals')
      dispatch(removeGoal(props.id));
    else{
      dispatch(removeToDo(props.id));
    }
    
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
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </CardBody>
    </Card>
  );
}

export default Item;