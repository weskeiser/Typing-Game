const StatusMessage = ({
  timeRemaining,
  intervalId,
  taskTimer,
  gameStatus,
}) => {
  const statusHandler = () => {
    // if (timeRemaining === taskTimer && !intervalId) {
    //   return 'Game instructions';
    // }
    return gameStatus === 'Over' ? 'Results' : 'Game instructions';
  };

  return <p>{statusHandler()}</p>;
};

export default StatusMessage;
