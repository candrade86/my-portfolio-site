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
   
   

    /* border: solid green; */
`
export const Top = styled.div`
    width: 100%;
    height: 10%;

    border: solid yellow;
`

export const LeftDiv = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;*/
    width: 45%;
    height: 90%; 
    
    border: solid red;
`
export const BotLeft = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    width: 100%;
    height: 100%;
     */
    height: 60%;
    overflow: auto;
    padding: 0 5%;

    border: solid pink;
`

export const TopLeft = styled.div`
    /* width: 100%;
    height: 100%; */
    height: 40%;
    border: solid green;


`

export const RightDiv = styled.div`
    /* position: relative;
    display: flex;
    justify-content: center;
    align-items: center;*/
    width: 45%;
    height: 80%; 
    

    border: solid red;
`

export const Image = styled.img`
    width: 40%;
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
    font-size: 2.5rem;
    line-height: 300%;
    
`