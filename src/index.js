import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import App from './App';

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />);