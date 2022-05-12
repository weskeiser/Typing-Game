import { forwardRef } from 'react';

let ChangeDuration = ({}, upcomingTask) => {
  return (
    <div className="game__main__task-controls__set-countdown">
      <label htmlFor="setCountdown">Set countdown:</label>
      <select
        name="setCountdown"
        id="setCountdown"
        onChange={(e) => {
          upcomingTask.current = {
            ...upcomingTask.current,
            duration: e.target.value,
          };
          // console.log(upcomingTask.current.duration);
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
