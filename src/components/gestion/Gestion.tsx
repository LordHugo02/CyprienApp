import React from 'react';
import { Outlet } from 'react-router-dom';

const Gestion = () => {
 return (
    <div className="h-screen w-screen">
        <Outlet />
    </div>

 );
};

export default Gestion;
