const SettingsToggles = ({ settingsVisible, setCurrentDatabase }) => {
  const handleVisibility = settingsVisible
    ? 'game__main__task-controls'
    : 'game__main__task-controls hidden';

  // const handleChange = (e) => {
  //   console.log(e.target);
  //   setCurrentDatabase(e.target.value);
  // };

  return (
    <div className={handleVisibility}>
      <fieldset className="game__main__task-controls__fieldset">
        <legend>Include in task:</legend>
        <div className="game__main__task-controls__options">
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            checked="true"
          />
          <label htmlFor="lowercase">Lowercase</label>
        </div>
        <div className="game__main__task-controls__options">
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            checked="true"
          />
          <label htmlFor="uppercase">Uppercase</label>
        </div>
        <div className="game__main__task-controls__options">
          <input type="checkbox" name="numbers" id="numbers" checked="true" />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="game__main__task-controls__options">
          <input type="checkbox" name="symbols" id="symbols" checked="true" />
          <label htmlFor="symbols">Symbols</label>
        </div>
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
