import React, { useState } from "react";
import { StartScreen, GameScreen, GameOverScreen } from "screens";
import styles from "./styles";

function GameContainer() {
  const [isGameStarted, setGameStart] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  const handleGameStart = () => {
    setGameStart(true);
    setGameOver(false);
  };

  const handleGameOver = () => {
    setGameStart(false);
    setGameOver(true);
  };

  return (
    <div className={styles.gameContainer}>
      {!isGameOver && (
        <>
          {!isGameStarted && <StartScreen onStart={handleGameStart} />}
          {isGameStarted && <GameScreen onGameOver={handleGameOver} />}
        </>
      )}
      {isGameOver && <GameOverScreen onStart={handleGameStart} />}
    </div>
  );
}

export default GameContainer;
