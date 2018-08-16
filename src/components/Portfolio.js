import React from 'react';

import { 
    Section 
} from './styled-components/Portfolio';

const Portfolio = props => {
    return (
        <Section id={props.id}>
            <h1> Portfolio </h1>          
        </Section>
    );
}

export default Portfolio;