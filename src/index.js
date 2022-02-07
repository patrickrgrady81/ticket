// https://react-bootstrap.github.io/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MyContext } from "./context";

ReactDOM.render(
  <MyContext>
    <App></App>
  </MyContext>,
  document.getElementById('root')
);