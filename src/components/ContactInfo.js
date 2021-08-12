import React, { Component } from 'react'

/**
 * This is the ContactInfo class where the user can see my email, linkedin
 * and they can submit me an email
 */

class ContactInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:" "
        }
    }

    handleChange = (event) =>{
        this.setState({userName: event.target.value});
    }

    onFormSubmit = (event) => {
        alert("Hey "+this.state.userName + " your message sent successfully!")
    }

    render() {
        return (
            <div>
                <h1>Contact Info</h1>
                Gmail: joeli.rosas20@gmail.com
                <br/>
                <a 
                href="https://www.linkedin.com/in/joel-rosas-50b653170/" 
                target="_blank" 
                rel="noopener noreferrer"> 
                    Linkedin
                </a>
                <form>
                    <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        onChange = {(event) => this.handleChange(event)}/>
                        <br/>
                    <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        id="email"/>
                        <br/>
                    <label htmlFor="message">Send me a message!</label>
                        <textarea 
                        rows="10" 
                        cols="30" 
                        id="message"/>
                        <br/>
                    <button type="submit" onClick={this.onFormSubmit}>submit</button>
                </form>
            </div>
        )
    }
}

export default ContactInfo
