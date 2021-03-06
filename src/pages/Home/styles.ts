import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  message: boolean;
}

const overlayAnimation = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const Overlay = styled.div<ContainerProps>`
  position: absolute;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background: rgba(245, 246, 247, 0.32);
  backdrop-filter: blur(10px);

  transition: visibility 0.2s, opacity 0.2s;

  animation: ${overlayAnimation} 0.2s;
`;

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
  transition: transform 0.2s;

  ${props =>
    props.message &&
    css`
      transform: translateX(-520px);
    `}
`;

export const Header = styled.div``;

export const Content = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h1 {
    font-size: 72px;
    line-height: 76px;
    max-width: 710px;
    text-align: center;
  }

  button {
    margin-top: 64px;
    height: 60px;
    padding: 0 32px;
    border-radius: 4px;
    color: #fafafc;
    display: flex;
    align-items: center;
    border: 0;
    background: linear-gradient(to top right, #6c2ffc, #892ffc);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.94;
    }

    &:active {
      opacity: 1;
    }

    svg {
      margin-left: 48px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 48px;
      font-size: 54px;
    }
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 36px;
      line-height: 42px;
    }

    button {
      margin-top: 48px;
    }
  }
`;

export const Footer = styled.div`
  align-self: flex-end;
  height: 24px;

  a {
    border: none;
    background: transparent;
    height: 24px;
    color: #892ffc;

    &:hover svg {
      opacity: 0.4;
    }

    svg {
      opacity: 0.24;
      transition: opacity 0.2s;
    }

    & + a {
      margin-left: 16px;
    }
  }
`;

const messageContainerAnimation = keyframes`
  from {
    right: -520px;
    visibility: hidden;
  }
  to {
    right: 0;
    visibility: visible;
  }
`;

export const MessageContainer = styled.div<ContainerProps>`
  padding: 80px;
  background: #fff;
  width: 520px;
  height: 100vh;
  position: absolute;
  z-index: 15;
  animation: ${messageContainerAnimation} 0.2s normal forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 720px) {
    width: 100vw;
    padding: 32px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 48px;
  }

  button {
    background: tomato;
  }

  form {
    textarea {
      min-height: 180px;
      max-height: 400px;
      margin-top: 8px;
      resize: vertical;
    }

    input + input {
      margin-top: 8px;
    }

    button {
      margin-top: 32px;

      width: 100%;
      height: 60px;
      padding: 0 32px;
      border-radius: 4px;
      color: #fafafc;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      background: linear-gradient(to top right, #6c2ffc, #892ffc);
      transition: opacity 0.2s;
      transition: background-color 0.2s;

      &:hover {
        opacity: 0.94;
      }

      &:active {
        opacity: 1;
      }

      &:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

export const MessageSendedContainer = styled.div`
  padding: 80px;
  background: #fff;
  width: 520px;
  height: 100vh;
  position: absolute;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  visibility: visible;

  h2 {
    width: 256px;
    text-align: center;
    margin-top: 48px;
  }

  button {
    margin-top: 200px;

    width: 100%;
    height: 60px;
    padding: 0 32px;
    border: 1px solid #6c2ffc;
    border-radius: 4px;
    color: #201432;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.94;
    }

    &:active {
      opacity: 1;
    }
  }
`;
