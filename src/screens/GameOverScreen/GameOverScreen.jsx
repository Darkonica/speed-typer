import { StartGame } from '../../components/StartGame';
import styles from './styles.scss?inline';

const GameOverScreen = ({ onStart, finalScore }) => {
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

export default GameOverScreen;
