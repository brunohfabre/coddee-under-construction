import React, { useState, useCallback } from 'react';
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

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    alert('send form');
  }, []);

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
          <h2>Envie sua mensagem</h2>

          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Nome" />
            <input name="email" type="email" placeholder="Email" />
            <textarea name="name" placeholder="Mensagem" />

            <button type="submit">Enviar</button>
          </form>
        </MessageContainer>
      )}
    </>
  );
};

export default Home;
