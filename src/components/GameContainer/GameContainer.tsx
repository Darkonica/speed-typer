import { useEffect, useState, useCallback } from 'react';
import { ScoreIndicator } from '../ScoreIndicator';
import { Timer } from '../Timer';
import { getNewText } from './helpers';
import styles from './styles.module.scss';

interface Props {
  onGameOver: (score: number) => void,
}

export const GameContainer = ({ onGameOver }: Props) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [currentText, setCurrentText] = useState(getNewText());
  const [inputText, setInputText] = useState('');

  const handleTimer = () => {
    if (timeLeft === 0) {
      onGameOver(score);
    } else {
      setTimeLeft(prevTime => prevTime - 1);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const enteredKey = event.key;

    if (enteredKey === 'Backspace') {
      setInputText(prevText => prevText.slice(0, prevText.length - 1));
    }

    if (/^[\w\d\s]{1}$/.test(enteredKey)) {
      setInputText(prevText => {
        const updatedText = prevText + enteredKey;

        if (updatedText.length > currentText.length) {
          return prevText;
        }

        if (updatedText === currentText) {
          setScore(prevScore => prevScore + 1);
          setCurrentText(getNewText());
          setTimeLeft(5);
          return '';
        }

        return updatedText;
      });
    }
  };

  // Type listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // Timer
  useEffect(() => {
    const timerID = setInterval(handleTimer, 1000);

    return () => clearInterval(timerID);
  }, [timeLeft]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.infoContainer}>
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
