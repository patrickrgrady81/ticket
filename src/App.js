import './App.css';

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Help from './components/Help'

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function App() {
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

export default App;
