const ChangeTask = ({ currentDatabase, setCurrentDatabase }) => {
  const handleChange = (e) => {
    const option = e.target;
    if (option.checked === true) {
      setCurrentDatabase({ ...currentDatabase, [option.name]: true });
    } else {
      setCurrentDatabase({ ...currentDatabase, [option.name]: false });
    }
  };

  const inputAndLabelInDiv = (id, labelName) => {
    return (
      <div className="game__main__task-controls__options">
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={true}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor={id}>{labelName}</label>
      </div>
    );
  };

  return (
    <fieldset className="game__main__task-controls__fieldset">
      <legend>Include in task:</legend>
      {inputAndLabelInDiv('lowercaseCharacters', 'Lowercase')}
      {inputAndLabelInDiv('uppercaseCharacters', 'Uppercase')}
      {inputAndLabelInDiv('numbers', 'Numbers')}
      {inputAndLabelInDiv('symbols', 'Symbols')}
    </fieldset>
  );
};

export default ChangeTask;
