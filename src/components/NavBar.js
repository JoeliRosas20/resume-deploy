import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"

/**
 * The navigation bar which helps the user jump to each page
 * being the Home, About Me, Projects, and Contact
 */

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="joel-header">Joel's Resume Page</h1>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to = "/" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links">
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-links">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links">
                            Contact Info
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
