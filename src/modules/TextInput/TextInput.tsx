import { forwardRef } from 'react';

let TextInput = (
  { setTextInputValue, textInputValue, textInputInactive },
  textInputRef
) => {
  const handleTextInput = (e) => {
    setTextInputValue(e.target.value);
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
