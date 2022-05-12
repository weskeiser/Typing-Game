import lowercaseCharacters from '../database/lowercaseCharacters';
import uppercaseCharacters from '../database/uppercaseCharacters';
import numbers from '../database/numbers';
import symbols from '../database/symbols';

const handleKeyPress = (e, startButtonRef, gameStatus) => {
  const mergedDatabases =
    lowercaseCharacters + uppercaseCharacters + numbers + symbols;
  // Bind SPACE key to start button
  if (e.keyCode === 32) {
    e.preventDefault();
    startButtonRef.current.click();
  }
  // Prevent use of backspace and delete
  if (e.keyCode === 8 || e.keyCode === 46) {
    e.preventDefault();
  }

  if (gameStatus !== 'Playing' && gameStatus !== 'Over') {
    for (let character of mergedDatabases) {
      if (e.key === character) {
        startButtonRef.current.click();
      }
    }
  }
};

export default handleKeyPress;
