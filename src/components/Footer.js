import React, { Component } from 'react';

import {
     FooterWrap

} from './styled-components/Footer';
import './animation-css/Footer.css';


class Footer extends Component {
    render(){
        return (
            <FooterWrap className='flex-center'>
                <div >
                    <a href='https://github.com/candrade86'><i className="fab fa-github fa-10x icon-3d"></i></a>
                    <a href='https://www.linkedin.com/in/carlos-andrade-580318168/'><i class="fab fa-linkedin-in fa-10x icon-3d"></i></a>
                </div>
                <div>
                    <p style={{color: 'white', fontSize: '2rem' }}>Carlos Arturo Andrade &copy;2018</p>
                </div>
            </FooterWrap>
        )
    }
}

export default Footer;