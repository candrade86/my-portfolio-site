import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
`

export const TopDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;

    /* border: solid yellow; */
`

export const BotDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
    padding: 4% 0;

    /* border: solid blue; */
`

export const Title = styled.h1`
     font-size: 4rem;
    font-family: 'Muli', sans-serif;
    font-weight: 1000;
    
`