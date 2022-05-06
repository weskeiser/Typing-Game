import React, { useState, useEffect } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import TaskDisplay from './modules/TaskDisplay/TaskDisplay';
import NewTaskButton from './modules/NewTaskButton/NewTaskButton';

const tempValue = [1, 2, 3, 4, 5];

function App() {
  const [displayText, setDisplayText] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    displayText == textInputValue ? console.log('win') : console.log('not yet');
  }, [textInputValue]);

  const handleTextInput = (e) => {
    setTextInputValue(e.target.value);
  };

  const handleNewTaskButton = (e) => {
    const getRandomCharacter = () => {
      return tempValue[Math.floor(Math.random() * tempValue.length)];
    };

    let newTask = '';
    for (let i = 0; i < 8; i++) {
      console.log('ho');
      newTask += getRandomCharacter();
    }

    setDisplayText(newTask);
  };

  // const randomCharacter = () => {
  //   const newTask = tempValue[Math.floor(Math.random() * tempValue.length)];
  // };

  return (
    <>
      <h1>Helloo World</h1>
      <TaskDisplay currentTask={displayText} />
      <br />
      <br />
      <TextInput
        valueState={textInputValue}
        handleTextInput={handleTextInput}
      />
      <br />
      <br />
      <NewTaskButton onClick={handleNewTaskButton} />
    </>
  );
}

export default App;
