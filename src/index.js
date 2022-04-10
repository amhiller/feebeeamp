import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//updates
import Amplify from 'aws-amplify';
import config from "./aws-exports";
import { MaterialUIControllerProvider } from 'context';

//react update
//import { createRoot } from "react-dom/client";

Amplify.configure(config);

//react upgrade
//const rootElement = document.getElementById("app");
//const root = createRoot(rootElement);


ReactDOM.render(
  <BrowserRouter>
  <MaterialUIControllerProvider>
    <App />
  </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
