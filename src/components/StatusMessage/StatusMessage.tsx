const StatusMessage = ({ settingsVisible }) => {
  const handleVisibility = settingsVisible
    ? 'game__status-message hidden'
    : 'game__status-message';

  return (
    <>
      <div className={handleVisibility}>
        <p>Press SPACE to Play and Pause</p>
        <p>Press any key to start.</p>
      </div>
    </>
  );
};

export default StatusMessage;
