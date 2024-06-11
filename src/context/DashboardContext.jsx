import React, { useState } from 'react'
import MainNavComponent from '../components/MainNavComponent'
import { Outlet } from 'react-router-dom'
import MainHeaderComponent from '../components/MainHeaderComponent'
import MainFooterComponent from '../components/MainFooterComponent'
// import './mainApp/css/style.css'

const DashboardContext = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value);
    }

    return (
        <>
            <div className="container-scroller d-flex">
                <MainNavComponent />
                <div className="container-fluid page-body-wrapper">
                    <MainHeaderComponent onSearch={handleSearch} />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {props.children}
                            <Outlet searchValue={searchValue} />
                        </div>
                        <MainFooterComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContext
