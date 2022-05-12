const StatusMessage = ({ gameStatus, progress, settingsVisible }) => {
  const statusHandler = () => {
    const howToStart = (
      <>
        <p>Press SPACE to Play and Pause</p>
        <p>Press any key to start.</p>
      </>
    );

    const instructions = howToStart;

    const resultMessage = (
      <>
        {howToStart}
        <p className="game__status-message__result">
          Congratulations! You scored {progress}!
        </p>
      </>
    );

    return gameStatus === 'Over' || gameStatus === 'Ready'
      ? resultMessage
      : instructions;
  };

  const handleVisibility = settingsVisible
    ? 'game__status-message hidden'
    : 'game__status-message';

  return (
    <>
      <div className={handleVisibility}>{statusHandler()}</div>
    </>
  );
};

export default StatusMessage;
