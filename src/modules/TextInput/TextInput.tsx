import { forwardRef } from 'react';

let TextInput = (
  {
    setTextInputValue,
    textInputValue,
    textInputInactive,
    displayText,
    progress,
    setProgress,
    setCurrentCharacter,
    successRate,
    setSuccessRate,
  },
  textInputRef
) => {
  const handleTextInput = (e) => {
    const inputFieldValue = e.target.value;
    const inputIndex = e.target.value.length - 1;
    const currentLetter = inputFieldValue[inputIndex];

    if (currentLetter === displayText[inputIndex]) {
      setTextInputValue(inputFieldValue);
      const newProgress = progress + 1;
      setProgress(newProgress);
      setCurrentCharacter([currentLetter, 'Correct']);
      setSuccessRate({ ...successRate, correct: successRate.correct + 1 });
    } else {
      setCurrentCharacter([currentLetter, 'Wrong']);
      setSuccessRate({ ...successRate, incorrect: successRate.incorrect + 1 });
    }
  };

  return (
    <input
      className="game__input"
      ref={textInputRef}
      type="text"
      value={textInputValue}
      onInput={handleTextInput}
      autoFocus
      readOnly={textInputInactive}
    />
  );
};

TextInput = forwardRef(TextInput);

export default TextInput;
