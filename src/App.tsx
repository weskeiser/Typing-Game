import { useState, useEffect, useRef } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import PlayButton from './modules/PlayButton/PlayButton';
import Countdown from './modules/Countdown/Countdown';
import SettingsButton from './modules/SettingsButton/SettingsButton';
import TaskControls from './modules/TaskControls/TaskControls';

import generateTask from './functions/generateTask';
import StatusMessage from './modules/StatusMessage/StatusMessage';
import handleKeyPress from './functions/handleKeyPress';

import WPM from './modules/WordsPerMinute.tsx/WordsPerMinute';
import CurrentCharacter from './modules/CurrentCharacter/CurrentCharacter';

function App() {
  // Refs
  const textInputRef = useRef();
  const startButtonRef = useRef();
  const upcomingTask = useRef({
    lowercaseCharacters: true,
    uppercaseCharacters: true,
    numbers: true,
    symbols: true,
    duration: '',
  });

  // States
  const [progress, setProgress] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(true);
  const [taskLength, setTaskLength] = useState(4);
  const [taskDuration, setTaskDuration] = useState(6);
  const [timeRemaining, setTimeRemaining] = useState(6);
  const [intervalId, setIntervalId] = useState(0);
  const [gameStatus, setGameStatus] = useState('Initial');
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('Initial');

  const [currentCharacter, setCurrentCharacter] = useState(['', '']);
  const [currentDatabase, setCurrentDatabase] = useState({
    lowercaseCharacters: true,
    uppercaseCharacters: true,
    numbers: true,
    symbols: true,
  });

  // Effects

  useEffect(() => {
    if (gameStatus === 'Over') {
      setCurrentDatabase(upcomingTask.current);
      console.log(currentDatabase);
      generateTask(
        currentDatabase,
        setTextInputValue,
        setDisplayText,
        taskLength
      );
      console.log(currentDatabase);
    }
  }, [gameStatus]);

  // - Generate initial task
  useEffect(() => {
    if (displayText === 'Initial') {
      generateTask(
        currentDatabase,
        setTextInputValue,
        setDisplayText,
        taskLength
      );
    }
  }, []);
  // - New taskset after field completion
  useEffect(() => {
    if (displayText == textInputValue) {
      generateTask(
        currentDatabase,
        setTextInputValue,
        setDisplayText,
        taskLength
      );
    }
  }, [textInputValue]);
  // - Prevent starting a game too soon
  useEffect(() => {
    if (gameStatus === 'Over') {
      let idleTime;
      if (!idleTime) {
        setTimeout(() => {
          setGameStatus('Ready');
          idleTime = '';
        }, 2000);
      }
    }
  }, [gameStatus]);

  return (
    <div
      className="game"
      tabIndex={-1}
      onKeyDown={(e) =>
        handleKeyPress(e, startButtonRef, gameStatus, setGameStatus)
      }
    >
      <div className="game__upper-modules">
        <ProgressDisplay progress={progress} />
        <WPM
          taskDuration={taskDuration}
          progress={progress}
          gameStatus={gameStatus}
        />
      </div>
      <div className="game__horizontal-modules">
        <div className="game__horizontal-modules--left">
          <Countdown timeRemaining={timeRemaining} />
          <CurrentCharacter currentCharacter={currentCharacter} />
        </div>
        <div className="game__main">
          <div className="game__main__upper">
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
            </section>
            <section className="game__main--right">
              <StatusMessage
                gameStatus={gameStatus}
                progress={progress}
                settingsVisible={settingsVisible}
              />
              <TaskControls
                settingsVisible={settingsVisible}
                upcomingTask={upcomingTask}
              />
            </section>
          </div>
          <div className="game__main__lower">
            <PlayButton
              ref={startButtonRef}
              currentDatabase={currentDatabase}
              setDisplayText={setDisplayText}
              setTextInputValue={setTextInputValue}
              textInputRef={textInputRef}
              setTextInputInactive={setTextInputInactive}
              taskLength={taskLength}
              setProgress={setProgress}
              taskDuration={taskDuration}
              timeRemaining={timeRemaining}
              setTimeRemaining={setTimeRemaining}
              intervalId={intervalId}
              setIntervalId={setIntervalId}
              setGameStatus={setGameStatus}
              gameStatus={gameStatus}
              setCurrentCharacter={setCurrentCharacter}
            />
            <SettingsButton
              settingsVisible={settingsVisible}
              setSettingsVisible={setSettingsVisible}
            />
          </div>
        </div>
        <div className="game__horizontal-modules--right"></div>
      </div>
    </div>
  );
}

export default App;
