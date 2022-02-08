import React from 'react';

import Home from '../Home'
import Dashboard from '../Dashboard'
import Help from '../Help'

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { IsLoggedInContextProvider } from '../../context/isLoggedInContext';

const Index = () => {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="ticket-tabs" className="mb-3 tabs">
                <Tab eventKey="home" title="Home">
                    <IsLoggedInContextProvider>
                        <Home></Home>
                    </IsLoggedInContextProvider>
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
