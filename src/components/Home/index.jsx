import './home.scss';

import React, {useContext} from 'react';
import { IsLoggedInContext } from '../../context/isLoggedInContext';

import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const Home = () => {

    const [isLoggedIn, setLoggedIn] = useContext(IsLoggedInContext);

    const handleLogIn = () => {
        setLoggedIn(true);
    }

    return (
        <div className="home-wrapper">
            <div className="btn-wrapper">
            {isLoggedIn ? <Navigate to='/dashboard'></Navigate> : <Button variant="contained" className="login-btn" onClick={handleLogIn}>Login</Button>}
            
            </div>
        </div>
    );
}

export default Home;
