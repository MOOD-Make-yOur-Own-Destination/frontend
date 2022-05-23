import React from 'react';
import {  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Init(){

    return(
        <div className="container">
            <hr/>
            <h2>성향분석이 완료되지 않았습니다</h2>
            <h5>성향분석 하러가기</h5>
            <br/>
            <Link to='/test'>
                <Button variant="secondary" size="lg">
                    성향분석 하러가기
                </Button>
            </Link>
        </div>
    )
}

export default Init;