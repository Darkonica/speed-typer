import { StartGame } from "../../components/StartGame";
import styles from "./styles.module.scss";

function StartScreen({ onStart }) {
  return (
    <div className={styles.startScreen}>
      <StartGame onStart={onStart} />
    </div>
  );
}

export default StartScreen;
