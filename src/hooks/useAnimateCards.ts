import { useState, useCallback, useMemo } from 'react';
import { TIME_FADE } from '../constants/animationFade';

export interface IStyledObject {
  animation: string;
}

export const useAnimateCards = (handleFunction: () => void) => {
  const [isShown, setShown] = useState(true);
  const styleObject: IStyledObject = useMemo(
    () => ({
      animation: `${isShown ? 'fadeIn' : 'fadeOut'} ${TIME_FADE}ms`,
    }),
    [isShown],
  );

  const handleDeleteCardAnimation = useCallback(() => {
    setShown(false);
    handleFunction();
  }, [handleFunction]);

  return {
    handleDeleteCardAnimation,
    styleObject,
  };
};
