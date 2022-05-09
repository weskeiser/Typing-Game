const startCountdown = (setTimeRemaining, setIntervalId) => {
  const countdown = setInterval(() => {
    setTimeRemaining((timeRemaining) => timeRemaining - 1);
  }, 1000);
  setIntervalId(countdown);
};

export default startCountdown;
