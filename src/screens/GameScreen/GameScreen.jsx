import React, { useEffect, useState, useCallback } from "react";
import { ScoreIndicator } from "components/ScoreIndicator";
import { Timer } from "components/Timer";
import { EASY_MODE_WORDS } from "./constants";
import styles from "./styles";

const getNewText = () =>
  EASY_MODE_WORDS[parseInt(Math.random() * EASY_MODE_WORDS.length)];

function GameScreen() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentText, setCurrentText] = useState(getNewText());
  const [inputText, setInputText] = useState("");

  const handleTimer = useCallback(
    (timer) => {
      if (timeLeft === 0) {
        console.log("!Game Over");
        clearInterval(timer);
      } else {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    },
    [timeLeft]
  );

  const handleKeyPress = useCallback(
    (event) => {
      const enteredKey = event.key;

      if (enteredKey === "Backspace") {
        setInputText((prevText) => prevText.slice(0, prevText.length - 1));
      }

      if (/^[\w\d\s]{1}$/.test(enteredKey)) {
        setInputText((prevText) => {
          const updatedText = prevText + enteredKey;

          console.log("!updatedText, currentText", updatedText, currentText);

          if (updatedText.length > currentText.length) {
            return prevText;
          }

          if (updatedText === currentText) {
            setScore((prevScore) => prevScore + 1);
            setCurrentText(getNewText());
            return "";
          }

          return updatedText;
        });
      }
    },
    [currentText]
  );

  // Type listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => handleTimer(timer), 1000);

    return () => clearInterval(timer);
  }, [handleTimer]);

  return (
    <div className={styles.gameScreenContainer}>
      <div className={styles.gameInfoContainer}>
        <div className={styles.topBar}>
          <Timer timeLeft={timeLeft} />
          <ScoreIndicator score={score} />
        </div>

        <div className={styles.typeItText}>{currentText}</div>
      </div>

      <div className={styles.inputTextContainer}>
        <div className={styles.inputText}>{inputText}</div>
      </div>
    </div>
  );
}

export default GameScreen;
