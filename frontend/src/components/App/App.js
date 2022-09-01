import { useState } from 'react';
import HighScore from '../HighScore/HighScore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [pontos, setPontos] = useState(0);

  function onDie(){
    setGameOver(true);
  }
  
  function onPontos(novosPontos){
    setPontos(novosPontos);
  }
  
  return (
    <div className="App">
      <Jogo onDie={onDie} onPontos={onPontos} />
      {gameOver && <HighScore pontos={pontos} />}
    </div>
  );
}

export default App;
