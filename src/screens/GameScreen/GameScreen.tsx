import { useState } from 'react';
import { StartScreen, GameOverScreen } from '../';
import { GameContainer } from '../../components/GameContainer';
import styles from './styles.module.scss';

export const GameScreen = () => {
  const [finalScore, setFinalScore] = useState<number>(0);
  const [isGameStarted, setGameStart] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  const handleGameStart = () => {
    setGameStart(true);
    setGameOver(false);
  };

  const handleGameOver = (score: number) => {
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
