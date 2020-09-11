import styled, { css } from 'styled-components';

interface ContainerProps {
  message: boolean;
}

export const Overlay = styled.div<ContainerProps>`
  position: absolute;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(10px);
  visibility: ${props => (props.message ? 'visible' : 'hidden')};
  opacity: ${props => (props.message ? 1 : 0)};

  transition: visibility 0.2s, opacity 0.2s;
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
