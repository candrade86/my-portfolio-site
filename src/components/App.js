import React, { Component } from 'react';

import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

//dependencies 
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './animation-css/App.css';
import { 
    AppWrapper,
    LinkWrap,
    HeaderLinkWrap,
    Nav 
  } from './styled-components/App';



class App extends Component {

  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0,0);

    }

  }
  
  
  render() {

    return (
      <AppWrapper>
        <Nav>
          <LinkWrap><AnchorLink href='#header'>Header</AnchorLink></LinkWrap>
          <LinkWrap><AnchorLink href='#about'>About</AnchorLink></LinkWrap>
          <LinkWrap><AnchorLink href='#portfolio'>Portfolio</AnchorLink></LinkWrap>
          <LinkWrap><AnchorLink href='#blog'>blog</AnchorLink></LinkWrap>
          <LinkWrap><AnchorLink href='#contact'>Contact</AnchorLink></LinkWrap>
        </Nav>

        
        <Header id={'header'} />
        <About id={'about'} />
        <Portfolio id={'portfolio'} />
        <Blog id={'blog'} />
        <Contact id={'contact'} />
        
          
       

      </AppWrapper>
    );
  }
}

export default App;
