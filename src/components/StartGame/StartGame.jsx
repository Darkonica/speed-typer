import React, { useEffect, useCallback } from 'react';

function StartGame({ onStart }) {
  const isKeyF = useCallback(event => {
    if (event.key.toLowerCase() === 'f') {
      onStart();
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', isKeyF);

    return () => {
      document.removeEventListener('keydown', isKeyF);
    };
  }, []);

  return <div>Press F to start a new game</div>;
}

export default StartGame;
