import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }
`;
