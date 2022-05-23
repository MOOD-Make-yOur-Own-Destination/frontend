import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Container, ToggleButtonGroup, ToggleButton, Row, Form, Col, Image } from 'react-bootstrap';
import { Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Detail from './Detail.js';
import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Init from './Init';
import List from './List';
import Profile from './Profile';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({id, password }) => setUser(signIn({ id, password }));
  const logout = () => setUser(null);
  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{textDecoration: 'none'}}>
          <Navbar.Brand >
            <img
              alt=""
              src="logo.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            MOOD
          </Navbar.Brand>
          </Link>
          {authenticated? (
            <div>
              <Button className="ProfileButton" variant="outline-success">Profile</Button>
              <LogoutButton logout = {logout} />
            </div>
          ): (
          <Link to="/login"> 
            <Button className="LoginButton" variant="outline-success">로그인</Button>
          </Link> 
          )}
          
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
        
        {authenticated? (
            <List/>
          ): (
          <Init/>
          )}
             
        
      </Route>

      <Route path="/detail">
        <Detail/>
      </Route>
      
      <Route path="/login"
        render={props => (
          <LoginForm authenticated = { authenticated } login = { login } { ...props } />
        )}
      />
      



    </div>
  );
}

export default App;
