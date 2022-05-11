import Button from '../Button/Button';

const SettingsButton = ({ settingsVisible, setSettingsVisible }) => {
  const handleSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  return (
    <Button
      className={'game__settings-button'}
      value="Settings"
      onClick={handleSettings}
    />
  );
};

export default SettingsButton;
