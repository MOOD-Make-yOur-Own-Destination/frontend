import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import axios from "axios";
import { replace } from 'connected-react-router';
import { useHistory } from 'react-router-dom';


function Register({ authenticated, login, location }){
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {replace} = useHistory();
    

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

        axios
        .post('http://shbox.shop:3007/user/register', {
        id: id,
        password: password,
        nickname: nickname,
        })
        .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        replace("/");
        })
        .catch((error) => {
        // Handle error.
       console.log('An error occurred:', error.response);
        
        });

        
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
                            <Button variant="secondary" type="submit" onClick={onSubmit}>
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