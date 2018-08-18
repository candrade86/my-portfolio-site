import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { 
    Section,
    LeftDiv,
    RightDiv,
    Text 
} from './styled-components/About';

const About = props => {
    return (
        <Section id={props.id}>
            <LeftDiv>
                <Text> About </Text>
            </LeftDiv>
            <RightDiv>
                <Text> Picture </Text>
            </RightDiv>
            {/* <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                <Text>Some Text</Text>
            </ScrollAnimation>         */}
        </Section>
    );
}

export default About;