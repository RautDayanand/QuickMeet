import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <Outlet/> 
      <Home/>
      <Footer/>
    </>
  );
}

export default App;

