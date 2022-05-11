const SettingsToggles = ({ settingsVisible }) => {
  const handleVisibility = settingsVisible
    ? 'game__task-controls'
    : 'game__task-controls hidden';

  return (
    <div className={handleVisibility}>
      <select className="game__task-controls__tasks">
        <option value="default">Select task type</option>
        <option value="allCharacters">All Characters</option>
        <option value="onlyLetters">Only Letters</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
};

export default SettingsToggles;
