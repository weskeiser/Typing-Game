import { forwardRef, useEffect } from 'react';

import generateTask from '../../functions/generateTask';
import startCountdown from '../../functions/startCountdown';
import Button from '../Button/Button';

let PlayButton = (
  {
    setDisplayText,
    setTextInputValue,
    setTextInputInactive,
    taskLength,
    setProgress,
    taskDuration,
    timeRemaining,
    setTimeRemaining,
    intervalId,
    setIntervalId,
    setGameStatus,
    gameStatus,
    textInputRef,
    setCurrentCharacter,
    upcomingTask,
    setCurrentTask,
    setTaskDuration,
    setSuccessRate,
  },
  startButtonRef
) => {
  useEffect(() => {
    // End of game
    if (intervalId && timeRemaining < 0.01) {
      setGameStatus('Over');
      // -- Clear fields
      clearInterval(intervalId);
      setIntervalId(0);
      setTextInputInactive(true);
      setTextInputValue('');
      setCurrentCharacter(['', '']);
      // -- Set task with chosen settings
      setCurrentTask(upcomingTask);
      setTaskDuration(upcomingTask.duration);
      setTimeRemaining(upcomingTask.duration);
      generateTask(upcomingTask, setTextInputValue, setDisplayText, taskLength);
    }
  }, [timeRemaining]);

  const handleClick = () => {
    // - Play and pause game.
    if (timeRemaining >= 0.02 && timeRemaining < taskDuration) {
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

    // - Start initial game
    if (
      (!intervalId && timeRemaining <= 0.1) ||
      (!intervalId && timeRemaining === taskDuration)
    ) {
      setTextInputInactive(false);
      textInputRef.current.focus();
      setProgress(0);
      setSuccessRate({ correct: 0, incorrect: 0 });
      setGameStatus('Playing');

      // -- Start countdown.
      setTimeRemaining(taskDuration);
      startCountdown(setTimeRemaining, setIntervalId);
    }
  };

  return (
    <>
      <Button
        className="game__play-button"
        buttonRef={startButtonRef}
        onClick={handleClick}
        value={gameStatus === 'Playing' ? 'Pause' : 'Play'}
      />
    </>
  );
};

PlayButton = forwardRef(PlayButton);

export default PlayButton;
