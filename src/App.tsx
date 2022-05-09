import { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import StartButton from './modules/StartButton/StartButton';
import Countdown from './modules/Countdown/Countdown';

import updateTask from './functions/updateTask';
import StatusMessage from './modules/StatusMessage/StatusMessage';
import handleKeyPress from './functions/handleKeyPress';

import characterDatabase from './database/characterDatabase';

function App() {
  // States
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('Task');
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(true);
  const [taskLength, setTaskLength] = useState(4);
  const [taskTimer, setTaskTimer] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState(taskTimer);
  const [intervalId, setIntervalId] = useState(0);
  const [gameStatus, setGameStatus] = useState('');

  // Refs
  const textInputRef = useRef();
  const startButtonRef = useRef();

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

  useEffect(() => {
    focusInput = textInputRef.current.focus();
  });

  let focusInput = null;

  return (
    <div
      className="game"
      tabIndex={-1}
      onKeyDown={(e) => handleKeyPress(e, startButtonRef)}
      onClick={() => focusInput}
    >
      <ProgressDisplay progress={progress} />
      <div className="game__container">
        <section className="game--left">
          {/* <h1 className="game__title">Typing Game</h1> */}
          <TaskDisplay currentTask={displayText} />
          <TextInput
            textInputValue={textInputValue}
            setTextInputValue={setTextInputValue}
            ref={textInputRef}
            textInputInactive={textInputInactive}
            displayText={displayText}
            progress={progress}
            setProgress={setProgress}
          />
          <StartButton
            ref={startButtonRef}
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
            setGameStatus={setGameStatus}
            gameStatus={gameStatus}
          />
        </section>
        <section className="game--right">
          <StatusMessage gameStatus={gameStatus} progress={progress} />
          <Countdown timeRemaining={timeRemaining} />
        </section>
      </div>
    </div>
  );
}

export default App;
