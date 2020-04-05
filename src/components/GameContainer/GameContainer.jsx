import React, { useState } from "react";
import { StartScreen, GameScreen } from "screens";
import styles from "./styles";

function GameContainer() {
  // const [isGameStarted, setGameStart] = useState(false);
  const isGameStarted = true;

  return (
    <div className={styles.gameContainer}>
      {/* {!isGameStarted && <StartScreen onStart={() => setGameStart(true)} />} */}
      {isGameStarted && <GameScreen />}
    </div>
  );
}

export default GameContainer;
