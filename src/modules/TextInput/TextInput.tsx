const TextInput = (props) => {
  const handleInput = () => {
    console.log('hi');
  };

  return (
    <input
      type="text"
      value={props.valueState}
      onInput={props.handleTextInput}
    />
  );
};

export default TextInput;
