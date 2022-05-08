import { useState, useEffect } from 'react';

const Timer = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(6);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    // Clear timer interval
    if (intervalId && !timeRemaining) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }, [timeRemaining]);

  const handleClick = () => {
    if (timeRemaining <= 0) {
      console.log('end game');
    }

    // Set initial task
    const getRandomCharacter = () => {
      return props.tempValue[
        Math.floor(Math.random() * props.tempValue.length)
      ];
    };
    let newTask = '';
    for (let i = 0; i < 8; i++) {
      newTask += getRandomCharacter();
    }
    props.setDisplayText(newTask);

    // Countdown
    if (!intervalId) {
      const countdown = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
      setIntervalId(countdown);
    }
  };

  return (
    <>
      <div>{timeRemaining}</div>
      <button onClick={handleClick}>Start game</button>
    </>
  );
};

export default Timer;
