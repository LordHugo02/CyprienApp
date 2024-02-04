import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import Home from './components/Home';
  
const Auth = React.lazy(() => import('./components/auth/Auth'));
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Gestion = React.lazy(() => import('./components/gestion/Gestion'));
const ProductComponent = React.lazy(() => import('./components/gestion/Product'));
const IncomeComponent = React.lazy(() => import('./components/gestion/Income'));
const OutcomeComponent = React.lazy(() => import('./components/gestion/Outcome'));
const SupplierComponent = React.lazy(() => import('./components/gestion/Supplier'));
const UseComponent = React.lazy(() => import('./components/gestion/Use'));
const StorageComponent = React.lazy(() => import('./components/gestion/Storage'));
const FamilyComponent = React.lazy(() => import('./components/gestion/Family'));


function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
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
                <ProductComponent />
              </React.Suspense>
            } />
            <Route path="incomes" element={
              <React.Suspense fallback={<Loading />}>
                <IncomeComponent />
              </React.Suspense>
            } />
            <Route path="outcomes" element={
              <React.Suspense fallback={<Loading />}>
                <OutcomeComponent />
              </React.Suspense>
            } />
            <Route path="storages" element={
              <React.Suspense fallback={<Loading />}>
                <StorageComponent />
              </React.Suspense>
            } />
            <Route path="suppliers" element={
              <React.Suspense fallback={<Loading />}>
                <SupplierComponent />
              </React.Suspense>
            } />
            <Route path="uses" element={
              <React.Suspense fallback={<Loading />}>
                <UseComponent />
              </React.Suspense>
            } />
            <Route path="families" element={
              <React.Suspense fallback={<Loading />}>
                <FamilyComponent />
              </React.Suspense>
            } />
            </Route>
          <Route path='*' element={<NotFound />} />
       </Routes>
    </>
  );
}

export default App;
