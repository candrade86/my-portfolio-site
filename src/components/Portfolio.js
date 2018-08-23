import React from 'react';
import trivPicture from '../assets/trivializer.png';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { 
    Section,
    TopDiv,
    BotDiv

} from './styled-components/Portfolio';
import './animation-css/Portfolio.css';

const Portfolio = props => {
    return (
        <Section id={props.id}>
            <TopDiv>
            <h1> Portfolio </h1>
            </TopDiv>

            <BotDiv>
                <ScrollAnimation animateIn='zoomIn' animateOut='fadeOut' style={{height: 'auto', width: '100%', border: 'solid green', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <figure className='effect-apollo' >
                        <a  href='https://trivializer.app'><img src={trivPicture} /></a>
                        <figcaption >
                            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div><h2 className='focus-in-contract' >View Trivializer</h2></div>
                            </div>
                        </figcaption>
                    </figure>
                </ScrollAnimation>
            </BotDiv>
        </Section>
    );
}

export default Portfolio;