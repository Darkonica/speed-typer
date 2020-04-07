import React from 'react';
import Header from 'components/UI/Header';
import { GameScreen } from 'screens';
import styles from 'styles/styles';

function App() {
  return (
    <div className={styles.background}>
      <Header />
      <GameScreen />
    </div>
  );
}

export default App;
