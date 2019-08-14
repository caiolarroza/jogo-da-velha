import React from 'react';
import Header from './components/Header';
import Tabuleiro from './objects/Tabuleiro';
import Xis from './objects/Xis';
import Circulo from './objects/Circulo';

function App() {
  return (
    <>
      <Header />
      <Tabuleiro />
      <Xis />
      <Circulo />
    </>
  );
}

export default App;
