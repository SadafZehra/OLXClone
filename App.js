//import logo from './logo.svg';
import './App.css';
import './Props.css';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./comps/Home";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
function App() {
  return (
    <Router> 
      <Route exact path = "/" component ={Header} />     
    <Route exact path = "/" component ={HomePage} />
    <Route exact path = "/" component ={Footer} />  
    </Router>
    
  );
}

export default App;
