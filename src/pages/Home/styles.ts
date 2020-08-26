import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
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

  button {
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

    & + button {
      margin-left: 16px;
    }
  }
`;
