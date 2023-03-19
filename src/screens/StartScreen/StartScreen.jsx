import { StartGame } from "../../components/StartGame";
import styles from "./styles.scss?inline";

function StartScreen({ onStart }) {
  return (
    <div className={styles.startScreen}>
      <StartGame onStart={onStart} />
    </div>
  );
}

export default StartScreen;
