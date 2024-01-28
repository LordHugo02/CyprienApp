import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Stock from './components/gestion/Stock';
import Gestion from './components/gestion/Gestion';
import Stock from './components/gestion/Stock';
import Api from './components/documentation/Api';
import Documentation from './components/documentation/Documentation';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<Login />}/>
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="gestion" element={<Gestion />}>
            <Route index element={<Stock />}/>
            {/* <Route path="register" element={<Register />} /> */}
          </Route>
          <Route path='*' element={<NotFound />}/>
       </Routes>
    </>
  );
}

export default App;
