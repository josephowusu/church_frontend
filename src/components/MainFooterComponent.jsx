import React from 'react';

const MainFooterComponent = () => {
    return (
        <>
            <footer class="footer">
                <div class="card">
                    <div class="card-body">
                        <div class="d-sm-flex justify-content-center justify-content-sm-between py-2">
                            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="/" target="_blank">ACCI.com </a>2024</span>
                            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><a href="/dashboard" target="_blank"> Codify Central </a></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainFooterComponent;
