import React, { Component } from 'react';

import {
     FooterWrap

} from './styled-components/Footer';
import './animation-css/Footer.css';


class Footer extends Component {
    render(){
        return (
            <FooterWrap className='flex-center'>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <div style={{padding: '1%'}} ><a onClick={()=> window.open('https://github.com/candrade86', '_blank')} href='#' ><i className="fab fa-github fa-10x icon"></i></a></div>
                    <div style={{padding: '1%'}}><a onClick={()=> window.open('https://www.linkedin.com/in/carlos-andrade-580318168/', '_blank')} href='#' ><i class="fab fa-linkedin-in fa-10x icon"></i></a></div>
                </div>
                <div>
                    <p style={{color: 'white', fontSize: '2rem' }}>Carlos Arturo Andrade &copy;2018</p>
                </div>
            </FooterWrap>
        )
    }
}

export default Footer;