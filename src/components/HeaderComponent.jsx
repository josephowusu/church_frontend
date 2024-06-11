import React, { useEffect, useState } from 'react';
import { fetchData } from '../modules/helper';

const HeaderComponent = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const menuClicked = () => {
        mobileNavToogle();
    }

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active')
    }

    const checker = () => {
        const sessionData = fetchData('userData')
        if (sessionData) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    useEffect(() => {
        checker()
    }, [])

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <h1>ACCI PORTAL</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="/">Home</a></li>
                            {loggedIn ? (<li><a href="/dashboard">Dashboard</a></li>) : (<li><a href="/user_login">Login</a></li>)}
                            <li><a href="/contact_us">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                        <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

                        <i className="bi bi-list mobile-nav-toggle" onClick={menuClicked}></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent;
