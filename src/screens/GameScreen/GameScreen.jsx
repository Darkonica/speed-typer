import { useState } from 'react';
import { StartScreen, GameOverScreen } from 'screens';
import { GameContainer } from 'components/GameContainer';
import styles from 'styles';

function GameScreen() {
  const [finalScore, setFinalScore] = useState(0);
  const [isGameStarted, setGameStart] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  const handleGameStart = () => {
    setGameStart(true);
    setGameOver(false);
  };

  const handleGameOver = score => {
    setFinalScore(score);
    setGameStart(false);
    setGameOver(true);
  };

  return (
    <div className={styles.gameScreen}>
      {!isGameOver && (
        <>
          {!isGameStarted && <StartScreen onStart={handleGameStart} />}
          {isGameStarted && <GameContainer onGameOver={handleGameOver} />}
        </>
      )}
      {isGameOver && <GameOverScreen onStart={handleGameStart} finalScore={finalScore} />}
    </div>
  );
}

export default GameScreen;
