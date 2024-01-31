import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import Auth from './components/auth/Auth';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
import NotFound from './components/NotFound';
// import Stock from './components/gestion/Stock';
// import Gestion from './components/gestion/Gestion';
import Loading from './components/Loading';
// import Family from './components/gestion/Family';

const Family = React.lazy(() => import('./components/gestion/Family'));
const Home = React.lazy(() => import('./components/Home'));
const Auth = React.lazy(() => import('./components/auth/Auth'));
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Stock = React.lazy(() => import('./components/gestion/Stock'));
const Gestion = React.lazy(() => import('./components/gestion/Gestion'));


function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            } />
          <Route path="auth" element={
              <React.Suspense fallback={<Loading />}>
                <Auth />
              </React.Suspense>
            }>
            <Route index element={
              <React.Suspense fallback={<Loading />}>
                <Login />
              </React.Suspense>
            } />
            <Route path="register" element={
              <React.Suspense fallback={<Loading />}>
                <Register />
              </React.Suspense>
            } />
          </Route>
          <Route path="gestion" element={
              <React.Suspense fallback={<Loading />}>
                <Gestion />
              </React.Suspense>
            } >
            <Route path="stock" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="incomes" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="outcomes" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="locations" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="suppliers" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="uses" element={
              <React.Suspense fallback={<Loading />}>
                <Stock />
              </React.Suspense>
            } />
            <Route path="families" element={
              <React.Suspense fallback={<Loading />}>
                <Family />
              </React.Suspense>
            } />
            </Route>
          <Route path='*' element={<NotFound />} />
       </Routes>
    </>
  );
}

export default App;
