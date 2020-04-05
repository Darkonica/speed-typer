import React from 'react';
import Header from 'components/UI/Header';
import { GameContainer } from 'components/GameContainer';
import styles from 'styles/styles';

function App() {
  return (
    <div className={styles.background}>
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
