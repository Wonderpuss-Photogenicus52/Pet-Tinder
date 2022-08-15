import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {

  return(
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  ); 
}

export default App