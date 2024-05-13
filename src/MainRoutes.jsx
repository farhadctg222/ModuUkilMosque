import React from 'react';
import { Outlet } from 'react-router-dom';

const MainRoutes = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoutes;