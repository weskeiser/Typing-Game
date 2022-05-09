const handleSpaceKey = (e, startButtonRef) => {
  if (e.keyCode === 32) {
    e.preventDefault();
    startButtonRef.current.click();
  }
};

export default handleSpaceKey;
