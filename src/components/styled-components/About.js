import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    height: 100vh;
    background: yellow;

    display: flex;
    justify-content: space-around;
    align-items: center;
   
    /* border: solid green; */
`
export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;

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
`

export const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;

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
    
`