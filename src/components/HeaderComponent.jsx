import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>ACCI PORTAL</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li className="dropdown"><a href="/user_login"><span>Account</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li className="dropdown"><a href="/user_register"><span>Get Started</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul> 
                                            <li><a href="/user_login">Login</a></li>
                                            <li><a href="/user_register">Register</a></li>
                                            {/* <li><a href="/how_to">How To Join</a></li> */}
                                            {/* <li><a href="/events">Events</a></li> */}
                                            {/* <li><a href="/help">Help</a></li> */}
                                            <li><a href="/support">Support</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                        <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                        <a href="#" className="mx-2"><span className="bi-instagram"></span></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent;
