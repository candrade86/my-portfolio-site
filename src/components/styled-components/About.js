import styled from 'styled-components';
import { device } from './MediaQueries';

export const Section = styled.section`
    position: relative;
    height: 100vh;
    background: yellow;

    display: flex;
    justify-content: space-around;
    align-items: center;
   
    /* @media ${device.galaxyS5} {
        flex-direction: column;
    }

    @media ${device.iphoneSSE} {
        flex-direction: column;
    }

    @media ${device.ipad} {
        position: relative;
        height: 100vh;
        background: yellow;

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

    @media ${device.ipadPro} {
        position: relative;
        height: 100vh;
        background: yellow;

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    } */



    /* border: solid green; */
`
export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;

     /* @media ${device.galaxyS5} {
        width: 100%;
    }

    @media ${device.iphoneSSE} {
        width: 100%;
    } */

    border: solid red;
`
export const BotLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    width: 100%;
    height: 60%;
    overflow: auto;
    padding: 0 5%;
   
    border: solid pink;
`

export const TopLeft = styled.div`
    width: 100%;
    height: 40%;
    border: solid green;

     /* @media ${device.iphoneSSE} {
        padding: 5px;
    } */
`

export const RightDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;
    padding: 30px;

    /* @media ${device.galaxyS5} {
        width: 100%;
    }

    @media ${device.iphoneSSE} {
        width: 100%;
        padding: 35px;
    }

    @media ${device.iphone678X} {
        width: 100%;
        padding-top: 60px;   
    } */

    border: solid red;
`

export const Image = styled.img`
    width: 40%;
    height: auto;
    
    /* padding: 10%; */
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
    line-height: 1.6;

    /* @media ${device.iphoneSSE} {
        font-size: 1.5rem;
        line-height: 1.1;
        padding: 5px;
    }

     @media ${device.iphone678X} {
        line-height: 1.5;

    } */

    
    
`