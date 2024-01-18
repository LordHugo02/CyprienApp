import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Documentation = () => {
    return (
        <main className="w-screen h-screen">
            <Outlet />
        </main>
    );
};

export default Documentation;
