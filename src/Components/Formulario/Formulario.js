import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';

function Formulario() {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="nameTask">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionTask">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" id='textoDescription'/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="dueDateTask">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <div className="button-container">
        <Button variant="primary" type="submit">
          Add Goal
        </Button>
      </div>
      
    </Form>
  );
}

export default Formulario;