import React from 'react';

const HeaderComponent = () => {

    const menuClicked = () => {
        mobileNavToogle();
    }

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active')
    }

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
                            <li><a href="/user_login">Login</a></li>
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
