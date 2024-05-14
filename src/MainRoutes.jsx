import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Componet/NavBar';
import Foter from './Componet/Foter';

const MainRoutes = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default MainRoutes;