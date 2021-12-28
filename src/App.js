import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import Login from './pages/Login';
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';

function App() {
  const [authState, setAuthState] = useState(()=> {
    return Cookies.get('authToken') == undefined ? false : true});
  
  let navigate = useNavigate();

  function signOut(){
    setAuthState(false);
    Cookies.remove('authToken');
    navigate("/Login");
  }

  if(authState){
    return(
    <div>
      <NavBar />
      <Outlet />
      <Button variant="contained" onClick={()=>signOut()}>Sign Out</Button>
    </div>
    );
  }else{
    return(<Login/>);
  }
}

export default App;