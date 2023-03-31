import { StartGame } from '../../components/StartGame';
import styles from './styles.module.scss';

interface Props {
  onStart: () => void;
  finalScore: number;
}

export const GameOverScreen = ({ onStart, finalScore }: Props) => {
  return (
    <div className={styles.gameOverScreen}>
      <div className={styles.title}>Game Over</div>
      <div className={styles.finalScore}>your final score: {finalScore}</div>
      <div className={styles.startGame}>
        <StartGame onStart={onStart} />
      </div>
    </div>
  );
};
