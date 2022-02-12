import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import SideDrawer from '../SideDrawer';

import { IsLoggedInContext } from '../../context/isLoggedInContext';
const Index = () => {

    const [isLoggedIn] = useContext(IsLoggedInContext);    

    return (
        <div>
            {isLoggedIn ? null : <Navigate to='/'></Navigate>}
            <SideDrawer />
        </div>
    );
}

export default Index;
