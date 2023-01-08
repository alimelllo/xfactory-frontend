import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from './components/CreateAccount/CreateAccount'
import Login from './components/Login/Login';
import UserContextProvider from './Context/UserContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}/>
     <Route path="/CreateAccount" element={<CreateAccount/>}/>
     <Route path="/Login" element={<Login/>}/>
   </Routes>
  </BrowserRouter>
  </UserContextProvider>
);

reportWebVitals();
