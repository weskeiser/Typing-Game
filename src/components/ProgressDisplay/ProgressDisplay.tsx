const ProgressDisplay = ({ progress }) => {
  return (
    <>
      <h2 className="game__upper-modules__progress-display">
        Score: {progress}
      </h2>
    </>
  );
};

export default ProgressDisplay;
