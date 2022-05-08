import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import Timer from './modules/Timer/Timer';
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
      <Timer
        characterDatabase={characterDatabase}
        setDisplayText={setDisplayText}
        setTextInputValue={setTextInputValue}
        TextInput={TextInput}
        textInputRef={textInputRef}
        setTextInputInactive={setTextInputInactive}
        taskLength={taskLength}
        setProgress={setProgress}
      />
      <GameStatus gameStatus={'Game status'} />
    </>
  );
}

export default App;
