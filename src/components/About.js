import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme  } from 'victory';
import Fade from 'react-reveal/Fade';

import { 
    Section,
    LeftDiv,
    RightDiv,
    Text,
    Image,
    TopLeft,
    BotLeft 
} from './styled-components/About';
import pic from '../assets/carlos.png';


const About = props => {

    const data = [
        {skill: "Javascript", level: 100},
        {skill: "React", level: 100},
        {skill: "Redux", level: 90},
        {skill: "Node.js", level: 70}
    ]

    return (
        <Section id={props.id}>
            <LeftDiv>
                
                <TopLeft>
                    <Image src={pic} />
                </TopLeft>
                    
                <BotLeft>
                    <Text>
                        Nam ac facilisis orci, at rutrum sem. Nam et enim lorem. Aenean pulvinar augue ut arcu viverra laoreet. Integer mattis mattis dolor, eu ultrices diam cursus vel. Integer sagittis, felis vel varius placerat, urna orci mattis metus, non accumsan ante erat quis libero. Fusce dictum orci nec egestas mollis. Integer sodales pharetra vulputate.
                    </Text>
                </BotLeft>
            </LeftDiv>
            <RightDiv>
                
                <div>
                <VictoryChart 
                    theme={VictoryTheme.material}
                    domain={{ y: [0.5, 5.5] }}
                    domainPadding={20}
                >
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`lvl ${x}`)}
                    />
                    <VictoryBar horizontal
                        data={data}
                        x="skill"
                        y="level"
                    />
                </VictoryChart>
                </div>
          



            </RightDiv>
            {/* <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                <Text>Some Text</Text>
            </ScrollAnimation>         */}
        </Section>
    );
}

export default About;


