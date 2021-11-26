import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';

if (process.env.NODE_ENV === "development") {
  require('./miragejs/server').makeServer();
}

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);