import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Zoom from 'react-reveal/Zoom';

import { 
    Section,
    DivWrap,
    LeftDiv,
    RightDiv,
    Text,
    BoldText,
    Image,
    ImageWrap,
    Top,
    Title,
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
            
            <Top><div><Title>About</Title></div></Top>
        <DivWrap style={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}> 
            <LeftDiv>
           
            <ScrollAnimation animateIn='bounceIn' style={{height: '100%', width: '100%'}}>
                
                <TopLeft>
                    
                        <ImageWrap>
                            <Image src={pic} />
                        </ImageWrap>
                    
                </TopLeft>
                    
                <BotLeft >
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div><BoldText>I'm a fullstack developer from</BoldText></div>

                            <div><BoldText>New York, New York.</BoldText></div>
                        </div>

                        <div>
                            <Text>
                                When I'm not hacking away on projects and learning about new technologies, I'm interacting with people from cultures around the world as  an online ESL teacher.
                            </Text>
                        </div>
                    </div>
                </BotLeft>
                
                </ScrollAnimation>
                
            </LeftDiv>
        

            <RightDiv>
            <ScrollAnimation animateIn='bounceIn' style={{height: '100%', position: 'relative', zIndex: '999'}} >
                

        
                    <div className="charts slide-in-right">
                        <div className="chart chart--dev">
                        
                        <ul className="chart--horiz">
                            {barGraph}
                        
                        </ul>
                        </div>
                        
                    </div>
                
              </ScrollAnimation>  
            </RightDiv>
        </DivWrap>
           
        </Section>
    );
}

export default About;


