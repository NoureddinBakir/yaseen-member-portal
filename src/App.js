import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  );
}

export default App;