import React, { useState, useEffect } from 'react';
import './styles/App.css';

import TextInput from './modules/TextInput/TextInput';
import Display from './modules/taskDisplay/taskDisplay';

const tempValue = '12345';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  // useEffect(() => {
  //   setDisplayText(textInputValue);
  // });

  const handleTextInput = (e) => {
    setTextInputValue(e.target.value);
    setDisplayText(e.target.value);
  };

  return (
    <>
      <h1>Helloo World</h1>
      <Display currentTask={tempValue} />
      <br />
      <br />
      <TextInput
        valueState={textInputValue}
        handleTextInput={handleTextInput}
      />
    </>
  );
}

export default App;
