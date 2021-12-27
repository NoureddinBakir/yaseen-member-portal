import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { NavBar } from './NavBar';
import Login from './pages/Login';
import Cookies from 'js-cookie';

function App() {
  const [authState, setAuthState] = useState(()=> {
    return Cookies.get('authToken') == undefined ? false : true});
  
  let navigate = useNavigate();

  function auth(){
    // setting authToken (for now a bool) and having it expire after 7 days
    Cookies.set('authToken', true, {expires: 7});
    setAuthState(Cookies.get('authToken'));
    console.log('2');
  }

  function signOut(){
    setAuthState(false);
    Cookies.remove('authToken');
    navigate("/Login");
  }

  if(authState){
    return(
    <div>
      <NavBar />
      <button onClick={()=>auth()}>Bool</button>
      <h2>{authState ? "true" : "false"}</h2>
      <button onClick={()=>signOut()}>Sign Out</button>
      <Outlet />
    </div>
    );
  }else{
    auth();
    return(<Login/>);
  }
}

export default App;