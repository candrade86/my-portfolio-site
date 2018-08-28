import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    
    background: #37383a;

    /* border: solid green; */
`

export const TopDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;

    border: solid yellow;
`

export const BotDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;
    border: solid blue;
`

export const Title = styled.h1`
    
    font-size: 5rem;
`