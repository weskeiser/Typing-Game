import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import TimerButton from './modules/TimerButton/TimerButton';
import GameStatus from './modules/GameStatus/GameStatus';

import updateTask from './functions/updateTask';

const characterDatabase = [1, 2, 3, 4, 5];

function App() {
  // States
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('Display');
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(false);
  const [taskLength, setTaskLength] = useState(4);
  const [taskTimer, setTaskTimer] = useState(12);
  const [timeRemaining, setTimeRemaining] = useState(taskTimer);
  const [intervalId, setIntervalId] = useState(0);
  const [gameStatus, setGameStatus] = useState(
    'Start typing or click Play to start a new game!'
  );

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

  function startCountdown() {
    const countdown = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);
    setIntervalId(countdown);
  }

  return (
    <>
      <ProgressDisplay
        progress={progress}
        setProgress={setProgress}
        characterDatabase={characterDatabase}
        setTextInputValue={setTextInputValue}
        setDisplayText={setDisplayText}
      />
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
        TextInput={TextInput}
        textInputRef={textInputRef}
        setTextInputInactive={setTextInputInactive}
        taskLength={taskLength}
        setProgress={setProgress}
        taskTimer={taskTimer}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        startCountdown={startCountdown}
      />
      <GameStatus gameStatus={gameStatus} />
    </>
  );
}

export default App;
