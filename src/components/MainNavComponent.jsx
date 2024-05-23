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
                        <i class="fa fa-th-large menu-icon" aria-hidden="true"></i>
                        <span className="menu-title">{category.title}</span>
                        <i class="fa fa-caret-down" aria-hidden="true" style={{marginLeft: 10}}></i>
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
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard">
                            <i class="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span class="menu-title">Dashboard</span>
                            {/* <div class="badge badge-info badge-pill">2</div> */}
                        </a>
                    </li>
                    {renderNavigation()}
                    <li class="nav-item">
                        <a class="nav-link" href="/department">
                            <i class="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span class="menu-title">Departments</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/calendar_event">
                            <i class="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span class="menu-title">Calendar & Events</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/calendar_event">
                            <i class="fa fa-th-large menu-icon" aria-hidden="true"></i>
                            <span class="menu-title">Tites & Offerings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNavComponent
