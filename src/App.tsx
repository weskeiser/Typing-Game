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
import SuccessRate from './modules/SuccessRate/SuccessRate';

function App() {
  // Refs
  const textInputRef = useRef();
  const startButtonRef = useRef();

  // States
  const [progress, setProgress] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputInactive, setTextInputInactive] = useState(true);
  const [taskLength, setTaskLength] = useState(4);
  const [taskDuration, setTaskDuration] = useState();
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [intervalId, setIntervalId] = useState(0);
  const [gameStatus, setGameStatus] = useState('Initial');
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('Initial');
  const [successRate, setSuccessRate] = useState({
    correct: 0,
    incorrect: 0,
  });

  const [currentCharacter, setCurrentCharacter] = useState(['', '']);
  const [currentTask, setCurrentTask] = useState({});
  const [upcomingTask, setUpcomingTask] = useState({
    lowercaseCharacters: true,
    uppercaseCharacters: false,
    numbers: false,
    symbols: false,
    duration: 15,
  });

  // Effects

  // - Generate initial task
  useEffect(() => {
    if (displayText === 'Initial') {
      generateTask(currentTask, setTextInputValue, setDisplayText, taskLength);
    }
  }, []);
  // - Change task settings in initial state
  useEffect(() => {
    if (gameStatus === 'Initial') {
      setCurrentTask(upcomingTask);
      setTaskDuration(upcomingTask.duration);
      setTimeRemaining(upcomingTask.duration);
      generateTask(upcomingTask, setTextInputValue, setDisplayText, taskLength);
    }
  }, [upcomingTask]);
  // - New taskset after field completion
  useEffect(() => {
    if (displayText == textInputValue) {
      generateTask(currentTask, setTextInputValue, setDisplayText, taskLength);
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
        }, 1000);
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
                successRate={successRate}
                setSuccessRate={setSuccessRate}
              />
            </section>
            <section className="game__main--right">
              <StatusMessage
                gameStatus={gameStatus}
                settingsVisible={settingsVisible}
              />
              <TaskControls
                settingsVisible={settingsVisible}
                upcomingTask={upcomingTask}
                setUpcomingTask={setUpcomingTask}
              />
            </section>
          </div>
          <div className="game__main__lower">
            <PlayButton
              ref={startButtonRef}
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
              upcomingTask={upcomingTask}
              setCurrentTask={setCurrentTask}
              setTaskDuration={setTaskDuration}
              setSuccessRate={setSuccessRate}
            />
            <SettingsButton
              settingsVisible={settingsVisible}
              setSettingsVisible={setSettingsVisible}
            />
          </div>
        </div>
        <div className="game__horizontal-modules--right">
          <SuccessRate gameStatus={gameStatus} successRate={successRate} />
        </div>
      </div>
    </div>
  );
}

export default App;
