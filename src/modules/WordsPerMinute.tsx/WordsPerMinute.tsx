const WPM = ({ taskTimer, progress, gameStatus }) => {
  const moduleVisible =
    gameStatus == 'Over'
      ? 'game__upper-modules__wpm game__upper-modules__wpm--visible'
      : 'game__upper-modules__wpm';

  return (
    <div className={moduleVisible}>
      <div className="game__upper-modules__wpm__int">
        {(progress / taskTimer) * 60}
      </div>
      <h2>WPM</h2>
    </div>
  );
};

export default WPM;
