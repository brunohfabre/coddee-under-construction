import React, { useRef, useState, useCallback } from 'react';
import axios from 'axios';
import {
  FiMessageCircle,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

import logoImage from '../../assets/icons/logo.svg';
import mailImage from '../../assets/icons/mail.svg';

import {
  Overlay,
  Container,
  Header,
  Content,
  Footer,
  MessageContainer,
  MessageSendedContainer,
} from './styles';

const Home: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const mailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [message, setMessage] = useState(false);
  const [messageSended, setMessageSended] = useState(false);
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();

    setSendButtonDisabled(true);

    const formData = new FormData();

    if (
      nameInputRef.current &&
      mailInputRef.current &&
      messageInputRef.current
    ) {
      if (
        !(
          nameInputRef.current.value &&
          mailInputRef.current.value &&
          messageInputRef.current.value
        )
      ) {
        return alert(
          'Por favor, preencha todos os campos para enviar uma mensagem!',
        );
      }

      formData.append('from', 'Contato site coddee <contato@coddee.com.br>');
      formData.append('to', 'bruno.hfabre@gmail.com');
      formData.append('subject', 'Contato site coddee');
      formData.append(
        'text',
        `
Nome: ${nameInputRef.current.value},
Email: ${mailInputRef.current.value},
Mensagem: ${messageInputRef.current.value},
      `,
      );

      try {
        await axios.post(
          'https://api.mailgun.net/v3/sandboxc9d82cd7def540aaac42216a9218e458.mailgun.org/messages',
          formData,
          {
            auth: {
              username: 'api',
              password: 'e08e1ef9bd8976f9f11cf9c036810cca-28d78af2-658580d4',
            },
          },
        );

        setMessageSended(true);
      } catch (err) {
        console.log(err);

        alert(
          'Ops, erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
        );
      }
    }

    setMessageSended(true);
  }, []);

  return (
    <>
      {message && (
        <Overlay
          message={message}
          onClick={() => {
            setMessage(false);
            setMessageSended(false);
            setSendButtonDisabled(false);
          }}
        />
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

        {/* <Footer>
          <a href="http://www.twitter.com/coddee">
            <FiTwitter size={24} />
          </a>

          <a href="http://www.instagram.com/coddee">
            <FiInstagram size={24} />
          </a>

          <a href="http://www.youtube.com/coddee">
            <FiYoutube size={24} />
          </a>
        </Footer> */}
      </Container>

      {message && !messageSended && (
        <MessageContainer message={message}>
          <h2>Envie sua mensagem</h2>

          <form onSubmit={handleSubmit} id="messageForm">
            <input
              ref={nameInputRef}
              name="name"
              type="text"
              placeholder="Nome"
            />
            <input
              ref={mailInputRef}
              name="email"
              type="email"
              placeholder="Email"
            />
            <textarea
              ref={messageInputRef}
              name="name"
              placeholder="Mensagem"
            />

            <button type="submit" disabled={sendButtonDisabled}>
              Enviar
            </button>
          </form>
        </MessageContainer>
      )}

      {message && messageSended && (
        <MessageSendedContainer>
          <img src={mailImage} alt="Email" />
          <h2>Sua mensagem foi enviada com sucesso</h2>

          <button
            type="button"
            onClick={() => {
              setMessageSended(false);
              setSendButtonDisabled(false);
            }}
          >
            Escrever nova mensagem
          </button>
        </MessageSendedContainer>
      )}
    </>
  );
};

export default Home;
