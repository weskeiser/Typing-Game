const WPM = ({ taskDuration, progress, gameStatus }) => {
  const moduleVisible =
    gameStatus === 'Over' || gameStatus === 'Ready'
      ? 'game__upper-modules__wpm game__upper-modules__wpm--visible'
      : 'game__upper-modules__wpm';

  const wpmCalculated = (progress / taskDuration) * 60;
  return (
    <div className={moduleVisible}>
      <div className="game__upper-modules__wpm__int">
        {wpmCalculated.toFixed()}
      </div>
      <h2>WPM</h2>
    </div>
  );
};

export default WPM;
