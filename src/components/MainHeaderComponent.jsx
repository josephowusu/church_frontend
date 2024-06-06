import React, { useEffect, useState } from 'react';
import logo from './../images/logo.jpeg'
import avatar from './../images/avatar.jpeg'
import { deleteData, fetchData, getFormattedDate } from '../modules/helper';
import { useNavigate } from 'react-router-dom';
// import './mainApp/css/style.css'

const MainHeaderComponent = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const GetData = async () => {
        const data = await fetchData('userData')
        if (data) {
            let name = `${data[0].firstName} ${data[0].otherName ? data[0].otherName : ''} ${data[0].lastName}`
            setName(name)
        }
    }

    const logOut = async (e) => {
        e.preventDefault()
        deleteData('userData')
        navigate('/user_login')
    }

    useEffect(()=>{
        GetData()
    }, [])

    return (
        <>
            <nav className="navbarmain col-lg-12 col-12 px-0 py-0 py-lg-4 d-flex flex-row">
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="navbar-brand-wrapper">
                        <a className="navbar-brand brand-logo" href="/dashboard"><img src={logo} alt="logo" style={{height: 50, borderRadius: '100%'}}/></a>
                        <a className="navbar-brand brand-logo-mini" href="/dashboard"><img src={logo} alt="logo" style={{height: 20, width: 20}}/></a>
                    </div>
                    <h4 className="font-weight-bold mb-0 d-none d-md-block mt-1">Welcome back, {name}</h4>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item">
                                <h4 className="mb-0 font-weight-bold d-none d-xl-block">Date: {getFormattedDate()}</h4>
                            </li>
                            <li className="nav-item dropdown me-1">
                                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                    <span className="count bg-info">2</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src={logo} alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal">David Grey</h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                The meeting is cancelled
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                New product launch
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal"> Johnson</h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                Upcoming board meeting
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown me-2">
                                <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                                    {/* <i className="mdi mdi-email-open mx-0"></i> */}
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span className="count bg-danger">1</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="mdi mdi-account-box mx-0"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            {/* <span className="mdi mdi-menu"></span>*/}
                            <i className="fa fa-bars" aria-hidden="true"></i> 
                        </button>
                    </div>
                    <div className="navbar-menu-wrapper navbar-search-wrapper d-none d-lg-flex align-items-center">
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item nav-search d-none d-lg-block">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here..." aria-label="search" aria-describedby="search" />
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-profile">
                                <p className="nav-link">
                                    <span className="nav-profile-name">{name}</span>
                                </p>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link icon-link" onClick={logOut}>
                                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    );
}

export default MainHeaderComponent;
