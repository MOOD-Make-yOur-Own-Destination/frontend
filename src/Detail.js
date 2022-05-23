import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Detail(){

    let history = useHistory();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p/> 
                    <img src='hotel.jpeg' width="100%"/>
                </div>
            
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">호텔명</h4>
                    <p>호텔 위치</p>
                    <p>호텔 별점</p>
                    <Link to={{ pathname: "https://www.naver.com" }} target="_blank">
                        <button className="btn btn-danger">예약 페이지로 이동</button>
                    </Link>
                    <button className="btn btn-danger" onClick={ () => { history.goBack(); }}>뒤로 가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;