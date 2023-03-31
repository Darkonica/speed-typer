import { useEffect, useCallback } from 'react';

interface Props {
  onStart: () => void;
}

export const StartGame = ({ onStart }: Props) => {
  const isKeyF = useCallback((event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'f') {
      onStart();
    }
  }, []);

  // const isKeyF = (event: KeyboardEvent) => {
  //   if (event.key.toLowerCase() === 'f') {
  //     onStart();
  //   }
  // };

  useEffect(() => {
    document.addEventListener('keydown', isKeyF);

    return () => {
      document.removeEventListener('keydown', isKeyF);
    };
  }, [isKeyF]);

  return <div>Press F to start a new game</div>;
};
