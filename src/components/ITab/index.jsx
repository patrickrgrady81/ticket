import React from 'react';

import Home from '../Home'
import Dashboard from '../Dashboard'
import Help from '../Help'

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Index = () => {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="ticket-tabs" className="mb-3 tabs">
                <Tab eventKey="home" title="Home">
                <Home></Home>
                </Tab>
                <Tab eventKey="dashboard" title="Dashboard">
                <Dashboard></Dashboard>
                </Tab>
                <Tab eventKey="help" title="Help">
                <Help></Help>  
                </Tab>
            </Tabs>
        </div>
    );
}

export default Index;
