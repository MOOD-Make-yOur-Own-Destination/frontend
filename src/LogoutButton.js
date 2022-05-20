import React from 'react';
import { withRouter  } from 'react-router';
import {Button} from 'react-bootstrap';

function LogoutButton({ logout, history })
{
    const handleClick = () => {
        logout();
        history.push('/');
    }
    return <Button className="LogoutButton" variant="outline-success" onClick={handleClick}>로그아웃</Button>
}

export default withRouter(LogoutButton);