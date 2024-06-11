import React, { useEffect, useState } from 'react';
import logo from './../images/logo.jpeg'
import avatar from './../images/avatar.jpeg'
import { deleteData, fetchData, getFormattedDate } from '../modules/helper';
import { useNavigate } from 'react-router-dom';
// import './mainApp/css/style.css'

const MainHeaderComponent = ({ searchValue, onSearch }) => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleChange = (event) => {
        event.preventDefault()
        onSearch(event.target.value)
    }

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
                    {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button> */}
                    <div className="navbar-brand-wrapper">
                        <a className="navbar-brand brand-logo" href="/dashboard"><img src={logo} alt="logo" style={{height: 50, borderRadius: '100%'}}/></a>
                        <a className="navbar-brand brand-logo-mini" href="/dashboard"><img src={logo} alt="logo" style={{height: 20, width: 20}}/></a>
                    </div>
                    <h4 className="font-weight-bold mb-0 d-none d-md-block mt-1" style={{textTransform: 'uppercase'}}>Welcome back, {name}</h4>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item">
                            <h4 className="mb-0 font-weight-bold d-none d-xl-block" style={{textTransform: 'uppercase'}}><i className="fa fa-calendar" aria-hidden="true" style={{marginRight: 10}}></i> {getFormattedDate()}</h4>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <i className="fa fa-bars" aria-hidden="true"></i> 
                    </button>
                </div>
                <div className="navbar-menu-wrapper navbar-search-wrapper d-none d-lg-flex align-items-center">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-search d-none d-lg-block">
                            <div className="input-group">
                                <input type="text" className="form-control" value={searchValue} placeholder="Search Here..." aria-label="search" aria-describedby="search" onChange={handleChange} />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile">
                            <p className="nav-link">
                                <span className="nav-profile-name" style={{textTransform: 'uppercase'}}>{name}</span>
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
