import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    overflow: hidden;
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

  button {
    cursor: pointer;
  }

  input, textarea {
    font: 400 16px Roboto, sans-serif;

    color: #201432;

    width: 100%;

    border: 1px solid #F0F0F0;
    border-radius: 4px;
    background: #fff;
    padding: 20px 16px;

    &::placeholder {
      color: #CCCCCC;
    }

    &:focus {
      border: 1px solid #6C2FFC;
    }
  }

  body, button {
    font: 500 16px Roboto, sans-serif;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;
