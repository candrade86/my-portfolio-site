import React from 'react';
import trivPicture from '../assets/trivializer.png';

import { 
    Section,

} from './styled-components/Portfolio';
import './animation-css/Portfolio.css';

const Portfolio = props => {
    return (
        <Section id={props.id}>
            <h1> Portfolio </h1>
            <figure className='effect-apollo'>
                <a  href='https://trivializer.app'><img src={trivPicture} /></a>
                <figcaption >
                    {/* <h2><span>Trivializer</span></h2> */}
                    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div><p>View Trivializer</p></div>
                    </div>
                </figcaption>

            </figure>
        </Section>
    );
}

export default Portfolio;