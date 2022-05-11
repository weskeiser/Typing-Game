const StatusMessage = ({ gameStatus, progress, settingsVisible }) => {
  const statusHandler = () => {
    const howToStart = <p>Press SPACE to start the game.</p>;

    const instructions = (
      <>
        {howToStart}
        <br />
        <p>Type the characters you see.</p>
        <br />
      </>
    );
    const resultMessage = (
      <>
        {howToStart}
        <br />
        <p>Congratulations! You scored {progress}!</p>
      </>
    );

    return gameStatus === 'Over' ? resultMessage : instructions;
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
