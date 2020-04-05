import React, { useEffect } from "react";
import styles from "./styles";

function StartScreen({ onStart }) {
  const isKeyF = (event) => {
    if (event.key.toLowerCase() === "f") {
      onStart();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", isKeyF);

    return () => {
      document.removeEventListener("keydown", isKeyF);
    };
  }, []);

  return <div className={styles.startScreen}>Press F to start a new game</div>;
}

export default StartScreen;
