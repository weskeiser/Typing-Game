const StatusMessage = ({ gameStatus, progress }) => {
  const statusHandler = () => {
    const howToStart = <p>Press SPACE to start the game.</p>;

    const instructions = (
      <>
        {howToStart}
        <br />
        <p>Type the characters you see.</p>
        <br />
        <p>Try to not look at your keyboard!</p>
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

  return <div className="game__status-message">{statusHandler()}</div>;
};

export default StatusMessage;
