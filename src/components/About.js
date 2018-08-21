import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme  } from 'victory';
import Fade from 'react-reveal/Fade';

import { 
    Section,
    LeftDiv,
    RightDiv,
    Text,
    Image,
    ImageWrap,
    TopLeft,
    BotLeft 
} from './styled-components/About';
import './animation-css/About.css';

import pic from '../assets/carlos.png';

import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Javascript', 'React', 'React Native', 'Redux', 'Node.js', 'Css', 'Git', 'Python', 'MongoDB', 'HTML5', 'Photoshop', 'Illustrator'],
  datasets: [
    {
    //   label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 82, 85, 100, 79, 60, 80, 100, 100, 89]
     
    }
  ]
};

const About = props => {
    

    




    return (
        <Section id={props.id}>
        
            <LeftDiv>
            <ScrollAnimation animateIn='slideInLeft' animateOut='slideOutLeft' style={{height: '100%', width: '100%'}}>
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
                
               
            <ScrollAnimation animateIn='slideInRight' animateOut='slideOutRight' style={{height: '100%', width: '100%'}}> 
                <HorizontalBar
                 data={data}
                 height={290}
                 
                 options={{ maintainAspectRation: false,
                    barDatasetSpacing: 10,
                    barValueSpacing: 10,
                    legend: {
                        display: false,
                        
                    },
                    scales: {
                        
                        yAxes: [
                            {
                                gridLines: {
                                  drawTicks: false,
                                  offsetGridLines: false,
                                  display:false
                                },
                                categoryPercentage: 0.5,
                                
                            
                                display: true, // this will hide vertical lines

                                ticks:{
                                    fontSize: 20,
                                    padding: 5,
                                    beginAtZero: true
                                },
                              },
                        ],
                        xAxes: [
                          {
                            gridLines: {
                              color: '#aaa',
                              borderDash: [1, 3],
                            },
                           
                            
                            display: false, // this will hide vertical lines
                          },
                        ],
                      },
                
                
                }}
                 />
                </ScrollAnimation>

            </RightDiv>
            {/* <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                <Text>Some Text</Text>
            </ScrollAnimation>         */}
        </Section>
    );
}

export default About;


