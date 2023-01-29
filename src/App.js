import logo from './logo.svg';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
// import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import React from 'react';
import Start from './Pages/Start';
import Register from './Pages/Register';
import RestAPI from './RestAPI';



function App() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/restapi" element={<RestAPI />}></Route>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
