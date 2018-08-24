import React, { Component } from 'react';
import axios from 'axios';
import { backendAPI } from '../config.js'

import { 
    Section 
} from './styled-components/About';

class Contact extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url: backendAPI, 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <Section id={this.props.id}>
                {console.log("conact props", this.props.id)}
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="InputEmail1">Email address</label>
                        <input type="email" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>         
            </Section>
        );
    }
}

export default Contact;