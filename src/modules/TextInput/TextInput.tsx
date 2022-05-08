import { forwardRef } from 'react';

let TextInput = (props, textInputRef) => {
  const handleTextInput = (e) => {
    props.setTextInputValue(e.target.value);
  };

  return (
    <input
      ref={textInputRef}
      type="text"
      value={props.textInputValue}
      onInput={handleTextInput}
      autoFocus
      readOnly={props.readOnly}
    />
  );
};

TextInput = forwardRef(TextInput);

export default TextInput;
