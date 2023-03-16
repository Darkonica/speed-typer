import React from "react";
import { StartGame } from "components/StartGame";
import styles from "./styles";

function StartScreen({ onStart }) {
  return (
    <div className={styles.startScreen}>
      <StartGame onStart={onStart} />
    </div>
  );
}

export default StartScreen;
