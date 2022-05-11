import uppercaseCharacters from '../database/uppercaseCharacters';
import lowercaseCharacters from '../database/lowercaseCharacters';
import numbers from '../database/numbers';
import symbols from '../database/symbols';

const generateTask = (
  currentDatabase,
  setTextInputValue,
  setDisplayText,
  taskLength
) => {
  let mergedDatabases = '';
  for (let database in currentDatabase) {
    if (database === 'uppercaseCharacters' && currentDatabase[database]) {
      mergedDatabases += uppercaseCharacters;
    }
    if (database === 'lowercaseCharacters' && currentDatabase[database]) {
      mergedDatabases += lowercaseCharacters;
    }
    if (database === 'numbers' && currentDatabase[database]) {
      mergedDatabases += numbers;
    }
    if (database === 'symbols' && currentDatabase[database]) {
      mergedDatabases += symbols;
    }
  }

  const getRandomCharacter = () => {
    return mergedDatabases[Math.floor(Math.random() * mergedDatabases.length)];
  };

  let newTask = '';
  for (let i = 0; i < taskLength; i++) {
    newTask += getRandomCharacter();
  }

  setTextInputValue('');
  setDisplayText(newTask);
};

export default generateTask;
