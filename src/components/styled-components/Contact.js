import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 100%;

    background: #536B78;
    /* border: solid green; */
`
export const Title = styled.h3`
    font-family: 'Muli', sans-serif;
    font-size: 4rem;
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