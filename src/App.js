import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import { Navbar, Button, Container, ToggleButtonGroup, ToggleButton, Row, Form, Col } from 'react-bootstrap';
import { Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Detail from './Detail.js';
import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Init from './Init';
import List from './List';
import Profile from './Profile';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';
import Tendency from './Tendency';
import Register from './Register';
import InitLogin from './InitLogin';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  

  const login = ({id, password }) => setUser(signIn({ id, password }));
  const logout = () => setUser(null);
  const {id, password, nickname, chk} = user || {};
  

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
              <Link to="/profile">
                <Button className="ProfileButton" variant="outline-light">Profile</Button>
              </Link>
              <LogoutButton logout = {logout} />
            </div>
          ): (
          <Link to="/login"> 
            <Button className="LoginButton" variant="outline-light">로그인</Button>
          </Link> 
          )}
          
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">          
          <ToggleButtonGroup type="checkbox" className="select_type">
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
    
          <ToggleButtonGroup type="checkbox" className="select_facility">
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
              chk == 0 
              ? <Init/>
              : <List/>
            ): (
            <InitLogin/>
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
        <Route path="/test">
          <Tendency/>
        </Route>

      <Route path="/detail">
        <Detail/>
      </Route>
      
      <Route path="/login"
        render={props => (
          <LoginForm authenticated = { authenticated } login = { login } { ...props } />
        )}
      />
      <Route path="/test">
        <Tendency/>
      </Route>

      <Route path="/signup">
        <Register/>
      </Route>

      <AuthRoute
        authenticated={authenticated}
        path="/profile"
        render={props => <Profile user={ user } { ...props } />}
      />

        
      </Switch>


    </div>
  );
}

export default App;
