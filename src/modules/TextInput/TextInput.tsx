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
    } else {
      setCurrentCharacter([currentLetter, 'Wrong']);
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
