import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import StorageComponent from './components/gestion/Storage';
// import Home from './components/Home';
// import MobileComponent from './components/Mobile';
  
const Auth = React.lazy(() => import('./components/auth/Auth'));
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Gestion = React.lazy(() => import('./components/gestion/Gestion'));
// const ProductComponent = React.lazy(() => import('./components/gestion/Product'));
// const IncomeComponent = React.lazy(() => import('./components/gestion/Income'));
// const OutcomeComponent = React.lazy(() => import('./components/gestion/Outcome'));
// const SupplierComponent = React.lazy(() => import('./components/gestion/Supplier'));
// const UseComponent = React.lazy(() => import('./components/gestion/Use'));
// const StorageComponent = React.lazy(() => import('./components/gestion/Storage'));
// const FamilyComponent = React.lazy(() => import('./components/gestion/Family'));


function App() {
  // const [isTooSmall, setIsToSmall] = useState(false);
  // useEffect(() => {
  //   if (window.screen.width < 800) {
  //     setIsToSmall(true);
  //   }
  // }, []);
  return (
    <>
      {/* {isTooSmall ? <MobileComponent /> :  */}
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
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
        }>
          <Route index element={<Navigate to="/gestion/stock" />} />
          <Route path="stock" element={<Navigate to="/gestion/storages" />} />
          <Route path="storages" element={
            <React.Suspense fallback={<Loading />}>
              <StorageComponent />
            </React.Suspense>
          } />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </>
  );
}

export default App;
