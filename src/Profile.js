import React from 'react';

function Profile({ user }) {
    const {id, nickname} = user || {};
    return (
        <>
            <h1>마이 페이지</h1>
            <dt>ID</dt>
            <dd>{id}</dd>
            <dt>닉네임</dt>
            <dd>{nickname}</dd>
        </>
    );
}

export default Profile;