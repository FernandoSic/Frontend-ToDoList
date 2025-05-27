import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Formulario from './Components/Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './reducers/toDoSlice';

function App() {
  const toDos = useSelector((state) => state.toDos.value);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col xs={0} md={0} className="d-none d-md-block d-sm-none d-sm-block">
          <Formulario />
          </Col>
          <Col xs ={0}  sm ={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddingMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                {
                  toDos.map((tarea)=> (
                    <Item  
                      name={tarea.name} 
                      description={tarea.description} 
                      dueDate={tarea.dueDate} 
                    />
                  ))
                }
              </div>
            </Row>
            
          </Col>
        </Row>
        

      </Container>
      
    </div>
  );
}

export default App;
