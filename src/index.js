import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dasboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Error, check the URL</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
