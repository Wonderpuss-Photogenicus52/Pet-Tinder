import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Signup from './components/Signup';

const App = () => {

  return(
    <div>
    <Navbar/>
    
      <Routes>
      <Route path='/' element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        
      </Routes>
      </div>
  ); 
}

export default App