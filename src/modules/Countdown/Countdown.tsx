// Timer logic found in StartButton component.

const Countdown = ({ timeRemaining }) => {
  return <div className="game__countdown">{timeRemaining.toFixed()}</div>;
};

export default Countdown;
