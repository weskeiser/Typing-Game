import { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import PlayButton from './modules/PlayButton/PlayButton';
import Countdown from './modules/Countdown/Countdown';

import updateTask from './functions/updateTask';
import StatusMessage from './modules/StatusMessage/StatusMessage';
import handleKeyPress from './functions/handleKeyPress';

import characterDatabase from './database/characterDatabase';
import WPM from './modules/WordsPerMinute.tsx/WordsPerMinute';
import CurrentCharacter from './modules/CurrentCharacter/CurrentCharacter';

function App() {
  // States
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('1l|fK7');
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(true);
  const [taskLength, setTaskLength] = useState(4);
  const [taskTimer, setTaskTimer] = useState(3);
  const [timeRemaining, setTimeRemaining] = useState(taskTimer);
  const [intervalId, setIntervalId] = useState(0);
  const [gameStatus, setGameStatus] = useState('');
  const [currentCharacter, setCurrentCharacter] = useState(['', '']);

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

  let focusInput;

  return (
    <div
      className="game"
      tabIndex={-1}
      onKeyDown={(e) => handleKeyPress(e, startButtonRef)}
      onClick={() => focusInput}
    >
      <div className="game__upper-modules">
        <ProgressDisplay progress={progress} />
        <WPM
          taskTimer={taskTimer}
          progress={progress}
          gameStatus={gameStatus}
        />
      </div>
      <div className="game__horizontal-modules">
        <div className="horizontal-modules__vertical">
          <Countdown timeRemaining={timeRemaining} />
          <CurrentCharacter currentCharacter={currentCharacter} />
        </div>
        <div className="game__main">
          <section className="game__main--left">
            <TaskDisplay currentTask={displayText} />
            <TextInput
              textInputValue={textInputValue}
              setTextInputValue={setTextInputValue}
              ref={textInputRef}
              textInputInactive={textInputInactive}
              displayText={displayText}
              progress={progress}
              setProgress={setProgress}
              setCurrentCharacter={setCurrentCharacter}
            />
            <PlayButton
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
              setCurrentCharacter={setCurrentCharacter}
            />
          </section>
          <section className="game__main--right">
            <StatusMessage
              gameStatus={gameStatus}
              progress={progress}
              taskTimer={taskTimer}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
