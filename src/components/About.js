import React from 'react';

import { 
    Section 
} from './styled-components/About';

const About = props => {
    return (
        <Section id={props.id}>
            <h1> About </h1>          
        </Section>
    );
}

export default About;