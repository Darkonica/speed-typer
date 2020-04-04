import React, { useState } from "react";
import { StartScreen } from "screens/StartScreen";

function GameContainer() {
  const [isGameStarted, setGameStart] = useState(false);

  return (
    <div>
      {!isGameStarted && <StartScreen onStart={() => setGameStart(true)} />}
      {isGameStarted && <div>Oh, there will be a game itself soon</div>}
    </div>
  );
}

export default GameContainer;
