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

    @media (max-width: 981px) {
        width: 30%;
    }

    @media (max-width: 604px) {
        width: 35%;
    }

     @media (max-width: 507px) {
        width: 40%;
    }

    @media (max-width: 436px) {
        width: 45%;
    }

    @media (max-width: 383px) {
        width: 50%;
    }

    @media (max-width: 342px) {
        width: 55%;
    }

    @media (max-width: 308px) {
        width: 60%;
    }
`
export const TitleWrap = styled.div`
    color: white;
    margin-bottom: 3%;
    font-size: 6rem;
`
export const Title = styled.h1`
    font-size: 10rem;

      @media (max-width: 707px) {
        font-size: 9rem;
  }

       @media (max-width: 636px) {
        font-size: 8.5rem;
  }

        @media (max-width: 601px) {
        font-size: 8rem;
  }


     @media (max-width: 567px) {
        font-size: 7.5rem;
  }

     @media (max-width: 530px) {
        font-size: 7rem;
  }

       @media (max-width: 495px) {
        font-size: 6.5rem;
  }

     @media (max-width: 473px) {
        font-size: 6rem;
  }

     @media (max-width: 435px) {
        font-size: 5.5rem;
  }

   @media (max-width: 417px) {
        font-size: 5rem;
  }

    @media (max-width: 397px) {
        font-size: 4.5rem;
  }

   @media (max-width: 378px) {
        font-size: 4rem;
  }

   @media (max-width: 360px) {
        font-size: 3.5rem;
  }

  @media (max-width: 342px) {
        font-size: 3rem;
  }

  @media (max-width: 322px) {
        font-size: 2.5rem;
  }

  @media (max-width: 303px) {
        font-size: 2rem;
  }
`

