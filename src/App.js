import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Formulario from './Components/Formulario/Formulario';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
          <Formulario />
        </Col>
        <Col>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Col>
        </Row>
        

      </Container>
      
    </div>
  );
}

export default App;
