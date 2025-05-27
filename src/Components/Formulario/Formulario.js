import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import {addToDo} from '../../reducers/toDoSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';



function Formulario() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    
    dispatch(addToDo({
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefDueDate.current.value
    }));
  }

  return (
    <Form >
      <Form.Group className="mb-3" controlId="nameTask">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionTask">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputRefDescription}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="dueDateTask">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" ref={inputRefDueDate} />
      </Form.Group>
      <div className="button-container">
        <Button variant="primary" onClick={addItem}>
          Add Task
        </Button>
      </div>
      
    </Form>
  );
}

export default Formulario;