import './home.scss';

import React, {useContext} from 'react';
import { IsLoggedInContext } from '../../context/isLoggedInContext';

import Button from 'react-bootstrap/Button';

const Home = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

    const handleLogIn = () => {
        setIsLoggedIn(!isLoggedIn)
        console.log(isLoggedIn)
    }

    return (
        <div className="home-wrapper">
            <div className="btn-wrapper">
            <Button className="login-btn" onClick={handleLogIn}>Login</Button>
            <Button className="admin-btn">Admin</Button>
            </div>
        </div>
    );
}

export default Home;
