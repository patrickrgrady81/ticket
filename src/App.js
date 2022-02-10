import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;