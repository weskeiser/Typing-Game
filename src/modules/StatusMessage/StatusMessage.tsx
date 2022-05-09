const StatusMessage = ({ gameStatus, progress }) => {
  const statusHandler = () => {
    const instructions = (
      <>
        <p>Press SPACE or click Play to start the game.</p>
      </>
    );

    const resultMessage = (
      <>
        {instructions}
        <p>Congratulations! You scored {progress}!</p>
        <p>Characters per minute: {progress * 4}</p>
      </>
    );

    return gameStatus === 'Over' ? resultMessage : instructions;
  };

  return <div>{statusHandler()}</div>;
};

export default StatusMessage;
