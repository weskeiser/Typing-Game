const handleKeyPress = (e, startButtonRef) => {
  // Bind space to Start Button
  if (e.keyCode === 32) {
    e.preventDefault();
    startButtonRef.current.click();
  }
  // Prevent use of backspace and delete
  if (e.keyCode === 8 || e.keyCode === 46) {
    e.preventDefault();
  }

  console.log(e.key);
};

export default handleKeyPress;
