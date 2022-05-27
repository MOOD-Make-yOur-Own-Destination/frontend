import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


function LoginForm({ authenticated, login, location }){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        try {
            login({ id, password });
         } catch (e) {
             alert('Failed to login');
             setId('');
             setPassword('');
         }
    };

    const { from } = location.state || { from: {pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <div className="loginform">
            <h1>Login</h1>
            <div>
                <Container className="panel">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="UserID" value = {id} onChange = {( {target: {value} }) => setId(value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Password" value = {password} onChange = {( {target: {value} }) => setPassword(value)}/>
                            </Col>
                        </Form.Group>
                        <br/>

                        <div className="d-grid gap-1">
                            <Button variant="secondary" type="submit" onClick={handleClick}>
                                Sign In
                            </Button>
                           
                            <Button variant="secondary" type="submit" href='/signup'> 
                                Sign Up
                            </Button>
                            
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
    
}

export default LoginForm;