// Timer logic found in StartButton component.

const Countdown = ({ timeRemaining }) => {
  const timeRemainingInt = timeRemaining.toFixed();

  return (
    <div
      className={
        timeRemainingInt > 9
          ? 'game__countdown'
          : 'game__countdown game__countdown--singledigit'
      }
    >
      {timeRemainingInt}
    </div>
  );
};

export default Countdown;
