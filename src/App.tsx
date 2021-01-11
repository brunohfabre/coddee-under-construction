import React from 'react';

import { GlobalStyle } from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => {
  console.log(!!process.env.REACT_APP_API_KEY);

  return (
    <>
      <GlobalStyle />

      <Home />
    </>
  );
};

export default App;
