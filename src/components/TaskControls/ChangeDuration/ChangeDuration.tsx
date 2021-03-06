let ChangeDuration = ({ upcomingTask, setUpcomingTask }) => {
  return (
    <div className="game__main__task-controls__set-countdown">
      <label htmlFor="setCountdown">Set countdown:</label>
      <select
        name="setCountdown"
        id="setCountdown"
        onChange={(e) => {
          setUpcomingTask({ ...upcomingTask, duration: e.target.value });
        }}
      >
        <option value="15">15 seconds</option>
        <option value="30">30 seconds</option>
        <option value="45">45 seconds</option>
        <option value="60">60 seconds</option>
      </select>
    </div>
  );
};

export default ChangeDuration;
