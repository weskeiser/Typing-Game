const SettingsToggles = ({
  settingsVisible,
  currentDatabase,
  setCurrentDatabase,
}) => {
  const handleVisibility = settingsVisible
    ? 'game__main__task-controls'
    : 'game__main__task-controls hidden';

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
    <div className={handleVisibility}>
      <fieldset className="game__main__task-controls__fieldset">
        <legend>Include in task:</legend>
        {inputAndLabelInDiv('lowercaseCharacters', 'Lowercase')}
        {inputAndLabelInDiv('uppercaseCharacters', 'Uppercase')}
        {inputAndLabelInDiv('numbers', 'Numbers')}
        {inputAndLabelInDiv('symbols', 'Symbols')}
      </fieldset>

      {/* <select className="game__main__task-controls__task-duration">
        <option value="">Select task duration</option>
        <option value="15">15 Seconds</option>
        <option value="30">30 Seconds</option>
        <option value="45">45 Seconds</option>
        <option value="60">60 Seconds</option>
      </select> */}
    </div>
  );
};

export default SettingsToggles;
