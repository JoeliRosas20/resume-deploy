import React from 'react';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SpaceGame from './pages/SpaceGame';
import ClothesApp from './pages/ClothesApp';
import NavBar from './components/NavBar'

function Site() {
    return (
        <Router>
        
            <NavBar/>
            <div className="pages">
            <Switch>
                <Route exact path="/" component = {HomePage}/>
                <Route exact path="/projects" component = {MyProjects}/>
                <Route exact path="/about" component = {AboutMe}/>
                <Route exact path="/contact" component = {ContactInfo}/>
                <Route exact path="/SpaceGame" component = {SpaceGame}/>
                <Route exact path="/ClothesApp" component = {ClothesApp}/>
            </Switch>
            </div>
        </Router>
    )
}

export default Site;
