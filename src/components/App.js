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
    Nav,
    LinkWrap,
    HeaderLinkWrap 
  } from './styled-components/App';



class App extends Component {
  // componentDidMount(){
  //   window.onscroll = function() {myFunction()};
  //   let nav = document.getElementById('navbar');
  //   let headerLink = document.getElementById('header-link'); 
  //   let aboutLink = document.getElementById('about-link');
  //   let portfolioLink = document.getElementById('portfolio-link');
  //   let blogLink = document.getElementById('blog-link');
  //   let contactLink = document.getElementById('contact-link');
  //   let sticky = nav.offsetTop;

  //   function myFunction() {
  //     if (window.pageYOffset > sticky) {
  //       nav.classList.add('sticky');
  //       headerLink.classList.add('link-style');
  //       aboutLink.classList.add('link-style');
  //       portfolioLink.classList.add('link-style');
  //       blogLink.classList.add('link-style');
  //       contactLink.classList.add('link-style');
  //     } else {
  //       nav.classList.remove('sticky');
  //       headerLink.classList.remove('link-style');
  //       aboutLink.classList.remove('link-style');
  //       portfolioLink.classList.remove('link-style');
  //       blogLink.classList.remove('link-style');
  //       contactLink.classList.remove('link-style');
  //     }
  //   }
  // }
  render() {

    return (
      <AppWrapper>
          {/* <Nav id="navbar">
            <LinkWrap><AnchorLink id='header-link' href='#header'>Header</AnchorLink></LinkWrap>
            <LinkWrap><AnchorLink id='about-link' href='#about'>About</AnchorLink></LinkWrap>
            <LinkWrap><AnchorLink id='portfolio-link' href='#portfolio'>Portfolio</AnchorLink></LinkWrap>
            <LinkWrap><AnchorLink id='blog-link' href='#blog'>blog</AnchorLink></LinkWrap>
            <LinkWrap><AnchorLink id='contact-link' href='#contact'>Contact</AnchorLink></LinkWrap>
          </Nav>  */}

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
