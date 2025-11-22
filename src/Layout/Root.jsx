import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;