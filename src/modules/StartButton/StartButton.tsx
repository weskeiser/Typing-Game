import { forwardRef, useEffect } from 'react';

import generateTask from '../../functions/generateTask';
import startCountdown from '../../functions/startCountdown';

let StartButton = (
  {
    characterDatabase,
    setDisplayText,
    setTextInputValue,
    textInputRef,
    setTextInputInactive,
    taskLength,
    setProgress,
    taskTimer,
    timeRemaining,
    setTimeRemaining,
    intervalId,
    setIntervalId,
    setGameStatus,
    gameStatus,
  },
  startButtonRef
) => {
  useEffect(() => {
    // End of game
    if (intervalId && !timeRemaining) {
      clearInterval(intervalId);
      setIntervalId(0);
      setTextInputInactive(true);
      setTextInputValue('');
      setDisplayText('Task');
      setGameStatus('Over');
    }
  }, [timeRemaining]);

  const handleClick = () => {
    // - Play and pause game.
    if (timeRemaining >= 1 && timeRemaining < taskTimer) {
      // -- Pause
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        setTextInputInactive(true);
        setGameStatus('Paused');
        return;
      } else {
        // -- Play
        textInputRef.current.focus();
        setTextInputInactive(false);
        setGameStatus('Playing');
        startCountdown(setTimeRemaining, setIntervalId);
      }
    }

    if (
      (!intervalId && timeRemaining === 0) ||
      (!intervalId && timeRemaining === taskTimer)
    ) {
      // - Set initial task.
      generateTask(
        characterDatabase,
        setTextInputValue,
        setDisplayText,
        taskLength
      );
      setTextInputInactive(false);
      textInputRef.current.focus();
      setProgress(0);
      setGameStatus('Playing');

      // - Start countdown.
      setTimeRemaining(taskTimer);
      startCountdown(setTimeRemaining, setIntervalId);
    }
  };

  return (
    <>
      <button
        className="game__start-button"
        ref={startButtonRef}
        onClick={handleClick}
      >
        {gameStatus === 'Playing' ? 'Pause' : 'Play'}
      </button>
    </>
  );
};

StartButton = forwardRef(StartButton);

export default StartButton;
