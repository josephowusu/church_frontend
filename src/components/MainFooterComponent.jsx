import React from 'react';

const MainFooterComponent = () => {
    return (
        <>
            <footer className="footer">
                <div className="card">
                    <div className="card-body">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="/" target="_blank">ACCI.com </a>2024</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><a href="/dashboard" target="_blank"> Codify Central </a></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainFooterComponent;
