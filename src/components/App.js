import React, { Component } from 'react';

import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

//dependencies 
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './animation-css/App.css';

import $ from 'jquery';

import { 
    AppWrapper,
    LinkWrap,
    HeaderLinkWrap,
    Nav 
  } from './styled-components/App';



class App extends Component {

  componentDidMount() {
 
    $('#toggle').click(function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link2').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link3').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link4').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
    // window.onbeforeunload = function () {
    //   window.scrollTo(0,0);

    // }

  }
  
  
  render() {

    return (
      <AppWrapper>

        <div className="button_container" id='toggle'><span class="top"></span><span class="middle"></span><span class="bottom"></span></div>
          <div className="overlay" id="overlay">
              <nav className="overlay-menu" id='menu'>
                  <ul>
                      <li><AnchorLink id='link' href='#header'><a href="#">Top</a></AnchorLink></li>
                      <li><AnchorLink id='link2' href='#about'><a href="#">About</a></AnchorLink></li>
                      <li><AnchorLink id='link3' href='#portfolio'><a href="#">portfolio</a></AnchorLink></li>
                      <li><AnchorLink id='link4' href='#contact'><a href="#">Contact</a></AnchorLink></li>
                  </ul>
              </nav>
          </div>




        
        <Header id={'header'} />
        <About id={'about'} />
        <Portfolio id={'portfolio'} />
        {/* <Blog id={'blog'} /> */}
        <Contact id={'contact'} />
        
          
       

      </AppWrapper>
    );
  }
}

export default App;
