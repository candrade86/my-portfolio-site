import React, { Component } from 'react';

import { backendAPI } from '../config.js'
import { 
    Section,
    FormWrap 
} from './styled-components/Contact';

import './animation-css/Contact.css';
import $ from 'jquery';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import axios from 'axios';


class Contact extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: 'POST', 
            url: 'https://peaceful-taiga-12647.herokuapp.com/api/send', 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            console.log(response)
            if (response.data.msg === 'success'){
                alert('Message Sent.'); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert('Message failed to send.')
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <Section id={this.props.id}>
                
                {/* <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                    <div>
                        <label for='name'>Name</label>
                        <input type='text' id='name' />
                    </div>
                    <div className='form-group'>
                        <label for='InputEmail1'>Email address</label>
                        <input type='email' id='email' aria-describedby='emailHelp' />
                    </div>
                    <div>
                        <label for='message'>Message</label>
                        <textarea id='message'></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>          */}
                 <ScrollAnimation animateIn='fadeIn' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FormWrap>
                        <form id='contact-form' className='contact' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                            <h3>Contact me!</h3>
            
                            <fieldset>
                            <input id='name' placeholder='Your name' type='text' tabindex='1' required autofocus />
                            </fieldset>
                            <fieldset>
                            <input id='email' placeholder='Your Email Address' type='email' tabindex='2' required />
                            </fieldset>
                            
                            <fieldset>
                            <textarea id='message' placeholder='Type your message here....' tabindex='3' required></textarea>
                            </fieldset>

                            
                            <fieldset>
                            <button name='submit' type='submit' id='contact-submit' >Submit</button>
                            </fieldset>
                        </form>
                    </FormWrap>
                </ScrollAnimation>
            </Section>
        );
    }
}

export default Contact;

