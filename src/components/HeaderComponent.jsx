import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>Continuation Int</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="/">Blog</a></li>
                            <li className="dropdown"><a href="/account"><span>Account</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="/login_user">Get Started</a></li>
                                    <li className="dropdown"><a href="/login_user"><span>Authentication</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="/login_user">Login</a></li>
                                            <li><a href="/how_to_join">How To Join</a></li>
                                            <li><a href="/events">Events</a></li>
                                            <li><a href="/help">Help</a></li>
                                            <li><a href="/customer_support">Customer Supports</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                </ul>
                            </li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                        <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                        <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

                        <a href="#" className="mx-2 js-search-open"><span className="bi-search"></span></a>
                        <i className="bi bi-list mobile-nav-toggle"></i>

                        <div className="search-form-wrap js-search-form-wrap">
                            <form action="search-result.html" className="search-form">
                            <span className="icon bi-search"></span>
                            {/* <input type="text" placeholder="Search" className="form-control"> */}
                            <button className="btn js-search-close"><span className="bi-x"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent;
