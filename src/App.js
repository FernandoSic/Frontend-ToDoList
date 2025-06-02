import './App.scss';
import './Components/todos'
import {Todos} from './Components/todos';
import {Goals} from './Components/goals';
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
import { initAddToDo } from './reducers/toDoSlice';
import { initAddGoal } from './reducers/goalsSlice';

function App() {

  const toDos = useSelector((state) => state.toDos.value);
  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.value);
  const dispatch = useDispatch();

  
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row className='mt-3'>
          <Col xs={12} md={12} className='text-center'>
            <div>
              {option === 'tasks' ? <h1>Tasks List</h1> : <h1>Goals List</h1>}
            </div>
          </Col>
        </Row>
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
                  option === 'tasks' &&
                  toDos.map((toDo, index) => (
                    <Item
                      key={index}
                      name={toDo.name}
                      description={toDo.description}
                      dueDate={toDo.dueDate}
                      id={toDo.id}/>))
                }
                {
                  option === 'goals' &&
                  goals.map((goal, index) => (
                    <Item
                      key={index}
                      name={goal.name}
                      description={goal.description}
                      dueDate={goal.dueDate}
                      id={goal.id}/>))
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
