import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(6);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (!timeRemaining) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }, [timeRemaining]);

  const handleClick = () => {
    if (timeRemaining <= 0) {
      console.log('end game');
    }

    const countdown = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);
    setIntervalId(countdown);
  };

  return (
    <>
      <div>{timeRemaining}</div>
      <button onClick={handleClick}>Start game</button>
    </>
  );
};

export default Timer;
