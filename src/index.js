import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';





ReactDOMClient
.createRoot(document.querySelector("#root"))
.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
