import React, { Component } from 'react';
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

class Portfolio extends Component {
    componentDidCatch(){ 
              
    }

    render(){
        return (
            <Section id={this.props.id} className='hero-bkg-animated'>

                <TopDiv>
                <div style={{padding: '10px 1%'}}><Title> Portfolio </Title></div>
                </TopDiv>

                <BotDiv>
                
                    <ScrollAnimation animateIn='fadeIn' style={{ padding: '4%', height: 'auto', width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                    
                            <figure className='effect-apollo' >
                                
                                    <img src={trivPicture} />
                                        
                                <figcaption >
                                    <div style={{ cursor: 'pointer', width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div><a onClick={()=> window.open("https://trivializer.app", "_blank")} style={{ width: 'auto', height: 'auto'}}><h2 className='focus-in-contract' >View Trivializer</h2></a> </div>
                                    </div>
                                </figcaption>
                                
                            </figure>
                        
                        
                    </ScrollAnimation>
                </BotDiv>
                
            </Section>
        );
    }
}

export default Portfolio;