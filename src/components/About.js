import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { 
    Section,
    Text 
} from './styled-components/About';

const About = props => {
    return (
        <Section id={props.id}>
            <h1> About </h1>  
            <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                <Text>Some Text</Text>
            </ScrollAnimation>        
        </Section>
    );
}

export default About;