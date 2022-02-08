import React, { useContext } from 'react';

import Home from '../Home'

import { IsLoggedInContext } from '../../context/isLoggedInContext';

const Index = () => {

       const [isLoggedIn] = useContext(IsLoggedInContext);

    return (
        <div>
            {/* Dashboard */}
            {isLoggedIn ? <p>Dashboard</p> : <Home></Home>}
        </div>
    );
}

export default Index;
