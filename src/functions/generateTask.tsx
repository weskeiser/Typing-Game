import uppercaseCharacters from '../database/uppercaseCharacters';
import lowercaseCharacters from '../database/lowercaseCharacters';
import numbers from '../database/numbers';
import symbols from '../database/symbols';

const generateTask = (
  currentTask,
  setTextInputValue,
  setDisplayText,
  taskLength
) => {
  let mergedDatabases = '';
  for (let database in currentTask) {
    if (database === 'uppercaseCharacters' && currentTask[database]) {
      mergedDatabases += uppercaseCharacters;
    }
    if (database === 'lowercaseCharacters' && currentTask[database]) {
      mergedDatabases += lowercaseCharacters;
    }
    if (database === 'numbers' && currentTask[database]) {
      mergedDatabases += numbers;
    }
    if (database === 'symbols' && currentTask[database]) {
      mergedDatabases += symbols;
    }
  }

  const getRandomCharacter = () => {
    return mergedDatabases
      ? mergedDatabases[Math.floor(Math.random() * mergedDatabases.length)]
      : '';
  };

  let newTask = '';
  for (let i = 0; i < taskLength; i++) {
    newTask += getRandomCharacter();
  }

  setTextInputValue('');
  setDisplayText(newTask);
};

export default generateTask;
