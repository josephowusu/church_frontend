import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import HeroSlider from '../components/HeroSlider';

const WebsiteContext = (props) => {
    return (
        <>
            <HeaderComponent />
            <main id="main">
                {props.children}
            </main>
            <Outlet />
        </>
    )
}

export default WebsiteContext;
