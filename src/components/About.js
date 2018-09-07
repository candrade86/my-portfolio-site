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



const About = props => {
    
    return (
        <Section id={props.id}>
            
            <Top><div><Title>About</Title></div></Top>
        <DivWrap style={{ padding: '2%', width: '100%', height: '90%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}> 
            <LeftDiv>
           
            <ScrollAnimation animateIn='fadeIn' style={{height: '100%', width: '100%'}}>
                
                <TopLeft>
                    
                        <ImageWrap>
                            <Image src={pic} />
                        </ImageWrap>
                    
                </TopLeft>
                    
                <BotLeft >
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{ height: '100%'}}><BoldText>I'm a fullstack developer from</BoldText></div>

                            <div style={{ height: '100%'}}><BoldText>New York, New York.</BoldText></div>
                        </div>

                        <div>
                            <Text>
                                When I'm not hacking away at projects and learning about new technologies, I'm interacting with people from cultures around the world as  an online ESL teacher.
                            </Text>
                        </div>
                    </div>
                </BotLeft>
                
                </ScrollAnimation>
                
            </LeftDiv>
        

            <RightDiv>
            <ScrollAnimation animateIn='fadeIn' style={{height: '100%', position: 'relative', zIndex: '999'}} >
                

        
                    <div className="">
                       
                        
                    </div>
                
              </ScrollAnimation>  
            </RightDiv>
        </DivWrap>
           
        </Section>
    );
}

export default About;


