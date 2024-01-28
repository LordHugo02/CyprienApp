import React from 'react';
import auth_wallpaper from '../../assets/images/wallpaper_auth_light.jpg';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="h-screen w-screen relative">
        <img src={auth_wallpaper} className="absolute top-0 left-0 h-full w-full z-0" alt="Logo" />
        <div className="absolute top-0 left-0 glass-gray-950-2xl h-full w-full z-10"></div>
        <Outlet />
    </div>
  );
};

export default Auth;
