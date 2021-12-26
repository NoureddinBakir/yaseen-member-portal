import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './App.css';
import logo from './images/logo.svg';

export function NavBar() {
    return (
        <div className="NavBar">
            <img className="navImg" src={logo} />
        </div>
    );
}