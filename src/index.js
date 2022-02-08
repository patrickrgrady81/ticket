// https://www.sitepoint.com/replace-redux-react-hooks-context-api/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { IsLoggedInContextProvider } from './context/isLoggedInContext';

ReactDOM.render(
  <IsLoggedInContextProvider>
    <App></App>
  </IsLoggedInContextProvider>,
  document.getElementById('root')
);