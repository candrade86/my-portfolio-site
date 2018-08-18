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
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;

    border: solid red;
`
export const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 95%;

    border: solid red;
`

export const Text = styled.p`
    font-size: 4rem;
`