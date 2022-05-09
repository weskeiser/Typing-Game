const handleKeyPress = (e, startButtonRef) => {
  if (e.keyCode === 32) {
    e.preventDefault();
    startButtonRef.current.click();
  }
  if (e.keyCode === 8 || e.keyCode === 46) {
    e.preventDefault();
  }
};

export default handleKeyPress;
