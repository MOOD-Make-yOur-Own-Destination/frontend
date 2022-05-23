import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';


function List(){

    return(
        <div>
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
        
      </div>
    )
}

export default List;