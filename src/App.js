import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Container, ToggleButtonGroup, ToggleButton, Row, Form, Col, Image } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';


function App() {

  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MOOD
          </Navbar.Brand>
          <Button variant="outline-success">로그인</Button>
        </Container>
      </Navbar>
      <Route exact path="/">
        <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="select_type">
          <ToggleButton id="hotel" variant="dark" value={1}>
            호텔
          </ToggleButton>
          <ToggleButton id="motel" variant="dark" value={2}>
            모텔
          </ToggleButton>
          <ToggleButton id="pension" variant="dark" value={3}>
            펜션
          </ToggleButton>
          <ToggleButton id="guesthouse" variant="dark" value={4}>
            게스트하우스
          </ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="select_facility">
          <ToggleButton id="wifi" variant="dark" value={1}>
            WiFi
          </ToggleButton>
          <ToggleButton id="breakfast" variant="dark" value={2}>
            조식제공
          </ToggleButton>
          <ToggleButton id="parking" variant="dark" value={3}>
            주차가능
          </ToggleButton>
        </ToggleButtonGroup>

        <Row className="searchTitle">
          <Col>
            <Form.Control type="text" placeholder="검색" />
          </Col>
        </Row>

        <Link to='/detail'>
          <div className="post">
            <hr/>
            <Image className="picture" src='hotel.jpeg'  />
            <h4>서울가든호텔</h4>
            <p>서울시 마포구<br/>4.6/5.0</p>
          </div>
        </Link>
        <Link to='/detail'>
        <div className="post">
          <hr/>
          <Image className="picture" src='hotel2.jpeg' />
          <h4>롯데시티호텔 명동</h4>
          <p>서울시 서초구<br/>4.5/5.0</p>
        </div>
        </Link>
        <Link to='/detail'>
          <div className="post">
            <hr/>
            <Image className="picture" src='hotel.jpeg' />
            <h4>로얄 서울 호텔</h4>
            <p>서울시 중구<br/>4.6/5.0</p> 
          </div>
        </Link>
      </Route>

      <Route path="/detail">
        <Detail/>
      </Route>
      



    </div>
  );
}

export default App;
