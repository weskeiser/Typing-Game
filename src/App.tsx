import { useState, useEffect } from 'react';
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

  return (
    <>
      <h1>Helloo World</h1>
      <TaskDisplay currentTask={displayText} />
      <br />
      <br />
      <TextInput
        valueState={textInputValue}
        setTextInputValue={setTextInputValue}
      />
      <br />
      <br />
      <NewTaskButton setDisplayText={setDisplayText} tempValue={tempValue} />
    </>
  );
}

export default App;
