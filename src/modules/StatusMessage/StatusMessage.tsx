const StatusMessage = ({ gameStatus, progress }) => {
  const statusHandler = () => {
    const resultMessage = `Congratulations! You scored ${progress} which is ${
      progress * 4
    } characters per minute.`;

    const instructions = 'Press any button or click start to begin the game.';

    return gameStatus === 'Over' ? resultMessage : instructions;
  };

  return <p>{statusHandler()}</p>;
};

export default StatusMessage;
