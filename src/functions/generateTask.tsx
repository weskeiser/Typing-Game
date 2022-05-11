import uppercaseCharacters from '../database/uppercase';
import lowercaseCharacters from '../database/lowercase';

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
