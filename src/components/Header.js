import React, { Component } from 'react';

import Particles from 'react-particles-js';

import './animation-css/Header.css';
import {
    Section,
    HeaderTitle,
    ButtonWrap,
    Button
} from './styled-components/Header'

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import anime from 'animejs';
import $ from 'jquery';

const particleOpt = {

    "particles": {
        "number": {
          "value": 9,
          "density": {
            "enable": true,
            "value_area": 320.6824121731046
          }
        },
        "color": {
          "value": "#292989"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#b3ae60"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 104.22178395625899,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 36.54347455356053,
            "size_min": 8.932849335314796,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "left",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
        
    
class Header extends Component {
  componentDidMount() {
    $('.ml11 .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: false})
      .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0,$(".ml11 .letters").width()],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 500,
        delay: -100,
        offset: '-=775',
        delay: function(el, i) {
          return 34 * (i+1)
        }
      }).add({
        targets: '.ml11',
        // opacity: 0,
        // duration: 1000,
        // easing: "easeOutExpo",
        // delay: 1000
      });
  }


  render(){
    return ( <Section id={this.props.id}> 
                

                <Particles 
                    params={particleOpt}
                    style={{
                        position: 'absolute',
                        height: '100%',
                        zIndex: '1',
                        

                    }}
                />
                <HeaderTitle style={{ padding: '0 3%'}}>
                <div className="ml11" >
                  <span style={{color: 'white'}}>$  </span> 
                  <span className="text-wrapper">
                  
                    <span className="line line1 blinker"></span>
                    <span className="letters">I'm a fullstack developer</span>
                  </span>
                </div>
                <ScrollAnimation  animateIn='fadeInUp' style={{width: '100%'}} delay='1500' animateOnce='true'>
                  <ButtonWrap><Button className='hvr-shutter-out-vertical'>My Portfolio</Button></ButtonWrap>
                </ScrollAnimation>
                </HeaderTitle>
                {this.props.children}
              
             </Section>
    );
  };
}

export default Header;