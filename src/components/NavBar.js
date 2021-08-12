import React from 'react'
import {NavLink} from 'react-router-dom'

/**
 * The navigation bar which helps the user jump to each page
 * being the Home, About Me, Projects, and Contact
 */

function NavBar() {
    return (
        <nav>
            <div>
                <h1>Joel's Resume Page</h1>
                <ul>
                    <li>
                        <NavLink to = "/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact Info
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
