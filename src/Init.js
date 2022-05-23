import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';


function Init(){

    return(
        <div className="container">
            <hr/>
            <h1>성향분석이 완료되지 않았습니다</h1>
            <h3>성향분석 하러가기</h3>
            <Button variant="secondary" size="lg">
                성향분석 하러가기
            </Button>
        </div>
    )
}

export default Init;