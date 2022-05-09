import { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import TimerButton from './modules/TimerButton/TimerButton';

import updateTask from './functions/updateTask';
import StatusMessage from './modules/StatusMessage/StatusMessage';

const characterDatabase = [1, 2, 3, 4, 5];

function App() {
  // States
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('Task');
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(false);
  const [taskLength, setTaskLength] = useState(4);
  const [taskTimer, setTaskTimer] = useState(6);
  const [timeRemaining, setTimeRemaining] = useState(taskTimer);
  const [intervalId, setIntervalId] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [gameStatus, setGameStatus] = useState('');

  // Refs
  const textInputRef = useRef();

  // Effects
  useEffect(() => {
    if (displayText == textInputValue) {
      updateTask(
        progress,
        displayText,
        setProgress,
        characterDatabase,
        setTextInputValue,
        setDisplayText,
        taskLength
      );
    }
  }, [textInputValue]);

  return (
    <>
      <StatusMessage
        timeRemaining={timeRemaining}
        intervalId={intervalId}
        taskTimer={taskTimer}
        gameStatus={gameStatus}
      />
      <ProgressDisplay progress={progress} />
      <h1>Typing Game</h1>
      <TaskDisplay currentTask={displayText} />
      <TextInput
        textInputValue={textInputValue}
        setTextInputValue={setTextInputValue}
        ref={textInputRef}
        readOnly={textInputInactive}
      />
      <br />
      <br />
      <br />
      <TimerButton
        characterDatabase={characterDatabase}
        setDisplayText={setDisplayText}
        setTextInputValue={setTextInputValue}
        textInputRef={textInputRef}
        setTextInputInactive={setTextInputInactive}
        taskLength={taskLength}
        setProgress={setProgress}
        taskTimer={taskTimer}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default App;
