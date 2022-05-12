const SuccessRate = ({ gameStatus, successRate }) => {
  const successRatePercentage = () => {
    if (successRate.correct) {
      return (
        (successRate.correct / (successRate.correct + successRate.incorrect)) *
        100
      ).toFixed();
    } else {
      return '';
    }
  };

  const moduleVisible =
    gameStatus === 'Over' || gameStatus === 'Ready'
      ? 'game__success-rate game__success-rate--visible'
      : 'game__success-rate';

  return (
    <div className={moduleVisible}>
      <div className="game__success-rate__percentage">
        {successRatePercentage()}
      </div>
      <h2 className="game__success-rate__text">Win Ratio</h2>
    </div>
  );
};

export default SuccessRate;
