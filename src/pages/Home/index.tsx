import React, { useState } from 'react';
import {
  FiMessageCircle,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

import logoImage from '../../assets/icons/logo.svg';

import {
  Overlay,
  Container,
  Header,
  Content,
  Footer,
  MessageContainer,
} from './styles';

const Home: React.FC = () => {
  const [message, setMessage] = useState(false);

  return (
    <>
      {message && (
        <Overlay message={message} onClick={() => setMessage(false)} />
      )}

      <Container message={message}>
        <Header>
          <img src={logoImage} alt="Coddee" />
        </Header>

        <Content>
          <h1>No momento estamos contruindo um novo site.</h1>

          <button type="button" onClick={() => setMessage(true)}>
            Envie uma mensagem
            <FiMessageCircle size={20} />
          </button>
        </Content>

        <Footer>
          <a href="http://www.twitter.com/coddee">
            <FiTwitter size={24} />
          </a>

          <a href="http://www.instagram.com/coddee">
            <FiInstagram size={24} />
          </a>

          <a href="http://www.youtube.com/coddee">
            <FiYoutube size={24} />
          </a>
        </Footer>
      </Container>

      {message && (
        <MessageContainer message={message}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus magnam non ea. Consequatur rem nihil tenetur quae
            expedita quos laborum voluptate. Quos velit est, tenetur similique
            ipsa neque reprehenderit unde.
          </p>

          <button type="button" onClick={() => setMessage(false)}>
            Fechar
          </button>
        </MessageContainer>
      )}
    </>
  );
};

export default Home;
