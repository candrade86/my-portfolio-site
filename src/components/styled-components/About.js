import styled from 'styled-components';
import { device } from './MediaQueries';

export const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 879px ){
        height: 100%;

    }
`
export const DivWrap = styled.div`
    @media (max-width: 879px ){
        flex-direction: column;
        width: 100%;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    font-family: 'Muli', sans-serif;

    /* border: solid yellow; */
`

export const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Muli', sans-serif;
`

export const LeftDiv = styled.div`
    width: 45%;
    height: 95%; 
    border-radius: 2%;

      @media (max-width: 879px ){
        width: 100%;
    }
    
    border: solid red;
`
export const BotLeft = styled.div`
    height: 60%;
    overflow: auto;
    padding: 0 5%;

    /* border: solid pink; */
`

export const TopLeft = styled.div`
    height: 40%;

    /* border: solid green; */


`

export const RightDiv = styled.div`
    width: 45%;
    height: 95%; 
    border-radius: 2%;
    /* overflow: scroll; */
    
    @media (max-width: 879px ){
        width: 100%;
    }

 


    border: solid red;
`

export const Image = styled.img`
    width: 33%;
    height: auto;
    
    border-radius: 50%;
`
export const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

export const Text = styled.p`
    font-size: 2.3rem;
    font-family: 'Ovo', serif;
    line-height: 150%;
    text-align: center;
    overflow: auto;
`
export const BoldText = styled.p`
    font-size: 3rem;
    font-weight: 1000;
    /* text-align: center; */

    @media (max-width: 881px) {
        font-size: 3rem;
    }
`