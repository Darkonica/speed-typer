import React from 'react';
import { StartGame } from 'components/StartGame';
import styles from './styles';

const GameOverScreen = ({ onStart }) => {
  return (
    <div className={styles.gameOverScreen}>
      <div>Game Over</div>
      <StartGame onStart={onStart} />
    </div>
  );
};

export default GameOverScreen;
