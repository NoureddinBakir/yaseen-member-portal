import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { NavBar } from './NavBar';

const auth = () => {
  const user = {loggedIn: true};
  return user && user.loggedIn;
}

function App() {
  let isAuth = auth();
  let navigate = useNavigate;

  return isAuth ? (
    <div>
      <NavBar />
      <Outlet />
    </div>
  ) : <Navigate to="/Login" />;
}

export default App;