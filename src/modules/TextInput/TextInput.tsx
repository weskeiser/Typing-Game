import { forwardRef } from 'react';

let TextInput = (
  {
    setTextInputValue,
    textInputValue,
    textInputInactive,
    displayText,
    progress,
    setProgress,
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
    }
  };

  return (
    <input
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
