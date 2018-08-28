import React from 'react';
import trivPicture from '../assets/trivializer.png';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { 
    Section,
    TopDiv,
    BotDiv,
    Title

} from './styled-components/Portfolio';
import './animation-css/Portfolio.css';

const Portfolio = props => {
    return (
        <Section id={props.id}>
            <TopDiv>
            <ScrollAnimation animateIn='fadeIn'>
            <div style={{padding: '10px 1%'}}><Title> Portfolio </Title></div>
            </ScrollAnimation>
            </TopDiv>

            <BotDiv>
            {/* style={{height: 'auto', width: '80%', border: 'solid green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 1%'}} */}
                <ScrollAnimation animateIn='fadeIn' style={{border: 'solid brown', padding: '4%', height: 'auto', width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    
                
                        <figure className='effect-apollo' >
                            <a style={{ width: 'auto', height: 'auto'}} href='https://trivializer.app'>
                                <img src={trivPicture} />
                            </a>         
                            <figcaption >
                                <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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