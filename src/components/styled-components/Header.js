import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    z-index: 6;
    top: 0;
    margin: 0;
    height: 100vh;
    background: #37383a;
    /* border: solid red; */
 
`


export const HeaderTitle = styled.div`
    position: relative;
    z-index: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 80%;
    font-size: 5rem;
    text-align: center;

    /* border: solid purple; */

`
export const ButtonWrap = styled.div`
    margin-top: 3%;
    width: 100%;
    height: auto;
   
`
export const Button = styled.button`
    height: auto;
    padding: 2%;
    width: 20%;
    font-size: 2rem;
    word-wrap: break-word;
    font-weight: 900;
    color: white;
    border: 5px solid white;
    background-color: transparent;
`


