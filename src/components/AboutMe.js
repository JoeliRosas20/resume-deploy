import React from 'react'
import Resume from './MyResume.pdf';

/** 
 * This class shows a paragraph about me and it has a link
 * to download my resume
*/

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <p>I am a software developer and software engineer who has a passion
                of coding by <br/>learning many languages and working on different side projects 
                from making apps, <br/>programs, games, and sites. Aside from coding, I like to read 
                on things like <br/>history and investments. I also like to workout, draw 
                ,watch anime, and play video games. 
            </p>
            <a 
            href={Resume} 
            target = "_blank" 
            rel="noopener noreferrer">
                My Resume
            </a>
            <br/>
        </div>
    )
}

export default AboutMe