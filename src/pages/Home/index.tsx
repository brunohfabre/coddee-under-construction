import React from 'react';

import {Container, Header, Content, Footer} from './styles';

const Home: React.FC = () => {

  return <Container>
  <Header>
    Logo
  </Header>

  <Content>
    <h1>No momento estamos contruindo um novo site.</h1>
    <button type='button'>Envie uma mensagem</button>
  </Content>

  <Footer>twitter instagram facebook</Footer>
</Container>
}

export default Home
