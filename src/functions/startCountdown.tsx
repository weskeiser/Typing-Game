const startCountdown = (setTimeRemaining, setIntervalId) => {
  const countdown = setInterval(() => {
    setTimeRemaining((timeRemaining) => timeRemaining - 0.01);
  }, 10);
  setIntervalId(countdown);
};

export default startCountdown;
