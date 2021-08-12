import React from 'react'
import {Link} from "react-router-dom"

function ClothesApp() {
    return (
        <div>
            <h1>The clothes App</h1>
            <Link to="/projects">
                Projects
            </Link>
        </div>
    )
}

export default ClothesApp
