import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

ReactDOMClient
.createRoot(document.querySelector("#root"))
.render(
  // wraps App in react router and renders app component: more detailed routing configuration is in tha
  // App.js component file. 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
