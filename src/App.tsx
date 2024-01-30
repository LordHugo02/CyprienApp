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
import Family from './components/gestion/Family';
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
            <Route path="stock" element={<Stock />}/>
            <Route path="incomes" element={<Stock />}/>
            <Route path="outcomes" element={<Stock />}/>
            <Route path="locations" element={<Stock />}/>
            <Route path="suppliers" element={<Stock />}/>
            <Route path="uses" element={<Stock />}/>
            <Route path="families" element={<Family />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
       </Routes>
    </>
  );
}

export default App;
