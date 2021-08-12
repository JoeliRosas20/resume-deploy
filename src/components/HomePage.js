import React from 'react'
import portrait from './MyPortrait.jpg'

/**
 * This is the home page for when the user gets to the site, they go here first
 */

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <img 
            src={portrait} 
            className='App-logo' 
            alt="portrait" />
            <br/>
            Hello, I am Joel Rosas and I am mastering React!
        </div>
    )
}

export default HomePage
