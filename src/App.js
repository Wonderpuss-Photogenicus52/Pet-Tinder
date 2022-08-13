import React from 'react'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

const App = () => {

  return(
    <div>
    <Navbar/>
      <Routes>
         <Route path='/' element={<Layout/>}>
          <Route path='signup' element={<Signup/>}></Route>
        </Route>
      </Routes>
      </div>
  ); 
}

export default App