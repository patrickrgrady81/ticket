import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { IsLoggedInContext } from '../../context/isLoggedInContext';

const Index = () => {

       const [isLoggedIn, setLoggedIn] = useContext(IsLoggedInContext);

       const handleClick = () => {
           setLoggedIn(false);
       }

    return (
        <div>
            {/* Dashboard */}
            {isLoggedIn ? <Button onClick={handleClick}>Logout</Button> : <Navigate to='/'></Navigate>}
        </div>
    );
}

export default Index;
