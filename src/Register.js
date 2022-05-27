import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function Register({ authenticated, login, location }){
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const onIDHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        if(password !== confirmPassword ){
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
        }
    }

    return (
        <div className="signupform">
            <h1>Sign Up</h1>
            <div>
                <Container className="panel">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="UserID" value = {id} onChange = {onIDHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="text" placeholder="Nickname" value = {nickname} onChange = {onNicknameHandler}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Password" value = {password} onChange = {onPasswordHandler}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Check Password" value = {confirmPassword} onChange = {onConfirmPasswordHandler}/>
                            </Col>
                        </Form.Group>
                        <br/>

                        <div className="d-grid gap-1">
                            <Button variant="secondary" type="submit" onSubmit={onSubmit}>
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
    
}

export default Register;