import React from 'react';
import {Button} from 'react-bootstrap';

function Profile({ user }) {
    const {id, nickname} = user || {};
    return (
        <>
            <h1>마이 페이지</h1>
            <dt>ID</dt>
            <dd>{id}</dd>
            <dt>닉네임</dt>
            <dd>{nickname}</dd>
            <Link to ='/tendencytest'>
                <Button variant="secondary" type="submit" href='/tendencytest'> 
                성향검사 하러가기
            </Button></Link>
            
        </>
    );
}

export default Profile;