import { useState } from 'react';
import HighScore from '../HighScore/HighScore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);

  function onDie(){
    setGameOver(true);
  }

  return (
    <div className="App">
      <Jogo onDie={onDie} />
      {gameOver && <HighScore />}
    </div>
  );
}

export default App;
