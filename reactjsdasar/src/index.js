import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
//import Variabel from './react/Variabel';
//import StateProps from './react/StateProps'
//import Map from './react/Map'
//import Lifecycle from './react/Lifecycle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud  from './crud/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);


