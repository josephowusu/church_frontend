import React from 'react'
import MainNavComponent from '../components/MainNavComponent'
import { Outlet } from 'react-router-dom'
import MainHeaderComponent from '../components/MainHeaderComponent'
import MainFooterComponent from '../components/MainFooterComponent'
// import './mainApp/css/style.css'

const DashboardContext = (props) => {
    return (
        <>
            <div class="container-scroller d-flex">
                <MainNavComponent />
                <div class="container-fluid page-body-wrapper">
                    <MainHeaderComponent />
                    <div class="main-panel">
                        <div class="content-wrapper">
                            {props.children}
                            <Outlet />
                        </div>
                        <MainFooterComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContext
