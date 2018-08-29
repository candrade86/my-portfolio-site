import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 100%;

    background: lightgrey;
    /* border: solid green; */
`

export const FormWrap = styled.div`
    width: 40%;

    @media ( max-width: 1140px) {
        width: 45%;
    }

    @media ( max-width: 750px) {
        width: 70%;
    }

`