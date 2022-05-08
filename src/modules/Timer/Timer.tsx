import { useState, useEffect } from 'react';
import generateTask from '../../functions/generateTask';

const Timer = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(6);
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
    if (timeRemaining >= 1 && timeRemaining <= 59) {
      console.log('pause game');
      // return;
    }

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
    if (!intervalId) {
      setTimeRemaining(10);
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
