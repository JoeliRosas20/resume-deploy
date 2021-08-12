import React from 'react'
import {Link} from "react-router-dom"

function SpaceGame() {
    return (
        <div>
            <h1>The Space Game</h1>
            <Link to="/projects">
                Projects
            </Link>
        </div>
    )
}

export default SpaceGame
