// Timer logic found in StartButton component.

const Countdown = ({ timeRemaining }) => {
  const timeRemainingInt = Math.floor(timeRemaining);

  const countdownStyle = () => {
    if (timeRemainingInt <= 3) {
      return 'game__countdown game__countdown--singledigit red';
    }
    if (timeRemainingInt >= 4 && timeRemainingInt <= 9) {
      return 'game__countdown game__countdown--singledigit';
    }
    if (timeRemainingInt > 9) {
      return 'game__countdown';
    }
  };

  return <div className={countdownStyle()}>{timeRemainingInt}</div>;
};

export default Countdown;
