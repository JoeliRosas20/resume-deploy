import React from 'react'
import {Link} from 'react-router-dom';

/**
 * This class shows links to my projects
 */

function MyProjects() {
    return (
        <div>
            <h1>Welcome to Projects</h1>
            <div className="proj-bar">
            <Link to="/SpaceGame" className="proj-link">
                Space Game
            </Link>
            <br/>
            <Link to="/ClothesApp" className="proj-link">
                Clothes App
            </Link>
            <br/>
            </div>
        </div>
    )
}

export default MyProjects
