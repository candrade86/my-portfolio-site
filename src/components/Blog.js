import React from 'react';

import { 
    Section 
} from './styled-components/Blog';

const Blog = props => {
    return (
        <Section id={props.id}>
            <h1> Blog </h1>          
        </Section>
    );
}

export default Blog;