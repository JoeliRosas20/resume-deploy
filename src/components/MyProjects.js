import React from 'react'
import {Link} from 'react-router-dom';

/**
 * This class shows links to my projects
 */

function MyProjects() {
    return (
        <div>
            <h1>Welcome to Projects</h1>
            <Link to="/SpaceGame">
                Space Game
            </Link>
            <br/>
            <Link to="/ClothesApp">
                Clothes App
            </Link>
            <br/>
        </div>
    )
}

export default MyProjects
