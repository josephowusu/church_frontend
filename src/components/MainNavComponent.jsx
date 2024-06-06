import React, { useEffect, useState } from 'react'
import { Router } from '../modules/Router'
import { useNavigate } from 'react-router-dom'

const MainNavComponent = () => {
    const navigate = useNavigate()
    const [expandedMenu, setExpandedMenu] = useState(null)

    const toggleSubMenu = (categoryIndex) => {
        if (expandedMenu === categoryIndex) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(categoryIndex)
        }
    }

    const renderSubPages = (subPages) => {
        return subPages.map((page, index) => (
            <li className="nav-item" key={index} style={{cursor: 'pointer'}}>
                <p className="nav-link" onClick={() => navigate(page.href)}>{page.title}</p>
            </li>
        ))
    }
    

    const renderNavigation = () => {
        return Object.values(Router).map((category, index) => (
            <>
                <li key={index} className="nav-item" style={{cursor: 'pointer'}}>
                    <p
                        className="nav-link"
                        onClick={() => toggleSubMenu(index)}
                        data-toggle="collapse"
                        aria-expanded={expandedMenu === index ? "true" : "false"}
                        aria-controls={`sub-menu-${index}`}
                    >
                        <i className="fa fa-th-large menu-icon" aria-hidden="true"></i>
                        <span className="menu-title">{category.title}</span>
                        <i className="fa fa-caret-down" aria-hidden="true" style={{marginLeft: 10}}></i>
                    </p>
                    <div className={`collapse ${expandedMenu === index ? "show" : ""}`} id={`sub-menu-${index}`}>
                        <ul className="nav flex-column sub-menu">
                            {renderSubPages(category.subPages)}
                        </ul>
                    </div>
                </li>
            </>
        ))
    }


    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/dashboard')}>
                            <i className="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span className="menu-title">Dashboard</span>
                            {/* <div className="badge badge-info badge-pill">2</div> */}
                        </a>
                    </li>
                    {renderNavigation()}
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/department')}>
                            <i className="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span className="menu-title">Departments</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/calendar_event')}>
                            <i className="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span className="menu-title">Calendar & Events</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/organisation')}>
                            <i className="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span className="menu-title">Organisation</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNavComponent
