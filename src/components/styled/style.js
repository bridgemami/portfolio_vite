import styled, { createGlobalStyle } from "styled-components";

const StyledFooter = styled.footer`
  background: #212529;
  color: white;
  padding: 2vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledPar = styled.p`
  margin: 0 0 0 0 !important;
`;

const StyledHeadingFont = styled.h2`
  text-align: center;
  color: #f2f2f2;
`;

const StyledThanks = styled.p`
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 15px;
  margin: 0 2vw;
  text-align: center;
`;

const StyledContactContainer = styled.section`
padding: 0 1em 1em 1em;
margin: 0 2vw;
`;
const StyledAboutContainer = styled.section`
  padding: 0 1em 1em 1em;
  margin: 0 2vw;
`;

const GlobalStyle = createGlobalStyle`
  p {
    color:  #F2F2F2;
  font-size: 1rem !important;
  font-family: 'Noto Sans', sans-serif;
  }

  h1, h2, h3 {
    color:  #F2F2F2;
    text-align: center;
    font-family: 'Noto Serif', serif;
  }

  h4 {
    color:  #F2F2F2;
    font-family: 'Noto Serif', serif;
  }

   input, textarea {
    margin-bottom : 2vh;
    max-width: 66.67%;
  }
  
   @media (min-width: 576px) {
     p {
       font-size: 24px;
     } 
   }
  
   @media screen and (min-width: 769px) {
     p {
       font-size: 32px;
     }
`;

export {
  StyledFooter,
  StyledPar,
  StyledHeadingFont,
  StyledAboutContainer,
  StyledContactContainer,
  StyledThanks,
  GlobalStyle,
};
