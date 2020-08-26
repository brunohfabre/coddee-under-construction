import React from 'react';
import {
  FiMessageCircle,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

import logoImage from '../../assets/icons/logo.svg';

import { Container, Header, Content, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImage} alt="Coddee" />
      </Header>

      <Content>
        <h1>No momento estamos contruindo um novo site.</h1>

        <button type="button">
          Envie uma mensagem
          <FiMessageCircle size={20} />
        </button>
      </Content>

      <Footer>
        <button type="button">
          <FiTwitter size={24} />
        </button>

        <button type="button">
          <FiInstagram size={24} />
        </button>

        <button type="button">
          <FiYoutube size={24} />
        </button>
      </Footer>
    </Container>
  );
};

export default Home;
