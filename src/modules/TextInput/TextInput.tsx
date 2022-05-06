const TextInput = (props) => {
  const handleTextInput = (e) => {
    props.setTextInputValue(e.target.value);
  };

  return (
    <input type="text" value={props.valueState} onInput={handleTextInput} />
  );
};

export default TextInput;
