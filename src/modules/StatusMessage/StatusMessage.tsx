const StatusMessage = ({ gameStatus, progress }) => {
  const statusHandler = () => {
    const resultMessage = `Congratulations! You scored ${progress} which is ${
      progress * 4
    } characters per minute. Press SPACE to play again.`;

    const instructions = 'Press SPACE or click Play to start the game.';

    return gameStatus === 'Over' ? resultMessage : instructions;
  };

  return <p>{statusHandler()}</p>;
};

export default StatusMessage;
