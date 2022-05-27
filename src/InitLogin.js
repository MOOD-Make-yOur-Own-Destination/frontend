import React from 'react';
import {  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function InitLogin(){

    return(
        <div className="container">
            <hr/>
            <h2>로그인이 되지 않았습니다.</h2>
            <h5>로그인 하러가기</h5>
            <br/>
            <Link to='/login'>
                <Button variant="secondary" size="lg">
                    로그인 하러가기
                </Button>
            </Link>
        </div>
    )
}

export default InitLogin;