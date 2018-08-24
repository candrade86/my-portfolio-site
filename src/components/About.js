import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Zoom from 'react-reveal/Zoom';

import { 
    Section,
    LeftDiv,
    RightDiv,
    Text,
    Image,
    ImageWrap,
    TopLeft,
    BotLeft,
} from './styled-components/About';
import './animation-css/About.css';

import pic from '../assets/carlos.png';


const data = [65, 59, 80, 81, 82, 85, 80, 79, 60,];
const labels = ['Javascript', 'React', 'React Native', 'Redux', 'Node.js', 'CSS', 'HTML5',  'MongoDB', 'Photoshop']
let label;
let barGraph = data.map((d,i) => {
   return ( 
    <li className="chart__bar" style={{width: `${d}%`}}>
    <span className="chart__label">
     { label = labels[i] }
    </span>
  </li>
   )
})

const About = props => {
    
    return (
        <Section id={props.id}>
        
            <LeftDiv>
            
            <ScrollAnimation animateIn='fadeIn' style={{height: '100%', width: '100%'}}>
                
                <TopLeft>
                    
                        <ImageWrap>
                            <Image src={pic} />
                        </ImageWrap>
                    
                </TopLeft>
                    
                <BotLeft>
                    
                    <Text>
                        Nam ac facilisis orci, at rutrum sem. Nam et enim lorem. Aenean pulvinar augue ut arcu viverra laoreet. Integer mattis mattis dolor, eu ultrices diam cursus vel. Integer sagittis, felis vel varius placerat, urna orci mattis metus, non accumsan ante erat quis libero. Fusce dictum orci nec egestas mollis. Integer sodales pharetra vulputate.
                    </Text>
                    
                </BotLeft>
                
                </ScrollAnimation>
                
            </LeftDiv>
        

            <RightDiv>
            <ScrollAnimation animateIn='fadeIn' style={{height: '100%', width: '100%', border: 'solid green'}}>
                

        
                    <div className="charts">
                        <div className="chart chart--dev">
                        
                        <ul className="chart--horiz">
                            {barGraph}
                        
                        </ul>
                        </div>
                        
                    </div>
                
              </ScrollAnimation>  
            </RightDiv>
            {/* <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                <Text>Some Text</Text>
            </ScrollAnimation>         */}
        </Section>
    );
}

export default About;


