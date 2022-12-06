import './style/main.css';
import Navbar from './Components/navbar';
import Game from './Components/Game'
import WordGame from './Components/WordGame';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Game />
      <WordGame />
    </React.Fragment>
  );
}

export default App;
