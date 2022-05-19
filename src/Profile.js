import React from 'react';

function Profile({ user }) {
    const {id, password, nickname } = user || {};
    return (
        <>
            <h1>Profile</h1>
            <dt>ID</dt>
            <dd>{ id }</dd>
            <dt>Password</dt>
            <dd>{ password }</dd>
            <dt>Nickname</dt>
            <dd>{ nickname } </dd>
        </>
    );
}

export default Profile;