import { StartGame } from "../../components/StartGame";
import styles from "./styles.module.scss";

interface Props {
  onStart: () => void,
}

export const StartScreen = ({ onStart }: Props) => {
  return (
    <div className={styles.startScreen}>
      <StartGame onStart={onStart} />
    </div>
  );
}
