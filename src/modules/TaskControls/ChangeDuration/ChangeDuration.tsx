import { forwardRef } from 'react';

let ChangeDuration = ({}, upcomingTaskDuration) => {
  return (
    <div className="game__main__task-controls__set-countdown">
      <label htmlFor="setCountdown">Set countdown:</label>
      <select
        name="setCountdown"
        id="setCountdown"
        onChange={(e) => {
          upcomingTaskDuration.current = e.target.value;
        }}
      >
        <option value="15">15 seconds</option>
        <option value="2">30 seconds</option>
        <option value="45">45 seconds</option>
        <option value="60">60 seconds</option>
      </select>
    </div>
  );
};

ChangeDuration = forwardRef(ChangeDuration);

export default ChangeDuration;
