import React from 'react';

import { 
    Section 
} from './styled-components/About';

const Contact = props => {
    return (
        <Section id={props.id}>
            {console.log("conact props",props.id)}
            <h1> Contact </h1>          
        </Section>
    );
}

export default Contact;