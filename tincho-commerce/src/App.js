import React from 'react';
/*import logo from './logo.svg';*/
import NavPpal from './components/NavBar';
import Home from './components/Home.js';
import Userform from './components/UserForm';
import './App.css';

function App() {
  return (
    <div>
      <NavPpal/>
      <Home greeting="Bienvenido" nombre="Tincho"/>
    </div>
  );
}

export default App;
