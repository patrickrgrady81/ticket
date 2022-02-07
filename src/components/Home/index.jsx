import './home.scss';

import React from 'react';

import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="btn-wrapper">
            <Button className="login-btn">Login</Button>
            <Button className="admin-btn">Admin</Button>
            </div>
        </div>
    );
}

export default Home;
