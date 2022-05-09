import { useEffect } from 'react';
import generateTask from '../../functions/generateTask';

const TimerButton = (props) => {
  // const [timeRemaining, setTimeRemaining] = useState(props.taskTimer);
  // const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    // End of game
    if (props.intervalId && !props.timeRemaining) {
      clearInterval(props.intervalId);
      props.setIntervalId(0);
      props.setTextInputInactive(true);
      props.setDisplayText('Task');
    }
  }, [props.timeRemaining]);

  // Button event handler to start and pause game.
  const handleClick = () => {
    // Play and pause game.
    if (props.timeRemaining >= 1 && props.timeRemaining < props.taskTimer) {
      if (props.intervalId) {
        clearInterval(props.intervalId);
        props.setIntervalId(0);
        props.setTextInputInactive(true);
        props.setCurrentlyPlaying(false);
        return;
      } else {
        props.textInputRef.current.focus();
        props.setTextInputInactive(false);
        props.startCountdown();
        props.setCurrentlyPlaying(true);
      }
    }

    if (
      (!props.intervalId && props.timeRemaining === 0) ||
      props.timeRemaining === props.taskTimer
    ) {
      // - Set initial task and focus text input.
      generateTask(
        props.characterDatabase,
        props.setTextInputValue,
        props.setDisplayText,
        props.taskLength
      );
      props.setTextInputInactive(false);
      props.textInputRef.current.focus();
      props.setProgress(0);
      props.setCurrentlyPlaying(true);

      // - Set countdown.
      props.setTimeRemaining(props.taskTimer);
      props.startCountdown();
    }
  };

  return (
    <>
      <div>{props.timeRemaining}</div>
      <button onClick={handleClick}>
        {props.currentlyPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  );
};

export default TimerButton;
