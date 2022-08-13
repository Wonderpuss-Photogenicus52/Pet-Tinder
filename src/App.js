import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  <main>
    <switch>
      <Route path='/' component={<Signup/>} />
    </switch>
  </main>  
}

export default App