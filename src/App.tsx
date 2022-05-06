import { useState, useEffect } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import NewTaskButton from './modules/NewTaskButton/NewTaskButton';
import ProgressDisplay from './modules/ProgressDisplay/ProgressDisplay';
import Timer from './modules/Timer/Timer';

const tempValue = [1, 2, 3, 4, 5];

function App() {
  const [progress, setProgress] = useState('progress');
  const [displayText, setDisplayText] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    if (displayText == textInputValue) {
      handleProgress();
    }
  }, [textInputValue]);

  const handleProgress = () => {
    const prevProgress = progress.slice();
    const newProgress = prevProgress.concat(displayText);
    setProgress(newProgress);

    const getRandomCharacter = () => {
      return tempValue[Math.floor(Math.random() * tempValue.length)];
    };

    let newTask = '';
    for (let i = 0; i < 8; i++) {
      newTask += getRandomCharacter();
    }

    setTextInputValue('');
    setDisplayText(newTask);
  };

  return (
    <>
      <ProgressDisplay
        progress={progress}
        setProgress={setProgress}
        tempValue={tempValue}
        setTextInputValue={setTextInputValue}
        setDisplayText={setDisplayText}
      />
      <h1>Helloo World</h1>
      <TaskDisplay currentTask={displayText} />
      <TextInput
        valueState={textInputValue}
        setTextInputValue={setTextInputValue}
      />
      <br />
      <br />
      <NewTaskButton setDisplayText={setDisplayText} tempValue={tempValue} />
      <br />
      <br />
      <Timer />
    </>
  );
}

export default App;
