import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #201432;
    background: linear-gradient(#FAFAFC, #FBFBFD);
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
    display: flex;
    flex: 1;
  }

  input{
    font: 400 16px Roboto, sans-serif;
  }

  body, button {
    font: 500 16px Roboto, sans-serif;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;
