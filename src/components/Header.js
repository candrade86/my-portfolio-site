import React from 'react';

import Particles from 'react-particles-js';

import {
    Section,
    HeaderTitle
} from './styled-components/Header'

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
        
    
const Header = () => {
    return ( <Section> 
                

                <Particles 
                    params={particleOpt}
                    style={{
                        position: 'absolute',
                        // width: '100%',
                        height: '100%',
                        zIndex: '1'
                    }}
                />
                <HeaderTitle>Header</HeaderTitle>
                
              
             </Section>
    );
}

export default Header;