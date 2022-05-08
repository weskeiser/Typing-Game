import { useState, useEffect } from 'react';
import generateTask from '../../functions/generateTask';

const Timer = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(props.taskTimer);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    // Clear timer interval.
    if (intervalId && !timeRemaining) {
      clearInterval(intervalId);
      setIntervalId(0);
      props.setTextInputInactive(true);
      props.setDisplayText('message');
    }
  }, [timeRemaining]);

  // Button event handler to start and pause game.
  const handleClick = () => {
    // Play and pause game.
    if (timeRemaining >= 1 && timeRemaining < props.taskTimer) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        props.setTextInputInactive(true);
        return;
      } else {
        const countdown = setInterval(() => {
          setTimeRemaining((timeRemaining) => timeRemaining - 1);
        }, 1000);
        setIntervalId(countdown);
      }
    }

    if (
      (!intervalId && timeRemaining === 0) ||
      timeRemaining === props.taskTimer
    ) {
      // - Set initial task and focus text input.
      generateTask(
        props.characterDatabase,
        props.setTextInputValue,
        props.setDisplayText,
        props.taskLength
      );
      props.setTextInputInactive(false);
      props.textInputRef.current.focus();
      props.setProgress(0);

      // - Set countdown.
      setTimeRemaining(props.taskTimer);
      const countdown = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
      setIntervalId(countdown);
    }
  };

  return (
    <>
      <div>{timeRemaining}</div>
      <button onClick={handleClick}>New Game</button>
    </>
  );
};

export default Timer;
