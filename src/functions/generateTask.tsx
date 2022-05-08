const generateTask = (
  characterDatabase,
  setTextInputValue,
  setDisplayText,
  taskLength
) => {
  const getRandomCharacter = () => {
    return characterDatabase[
      Math.floor(Math.random() * characterDatabase.length)
    ];
  };

  let newTask = '';
  for (let i = 0; i < taskLength; i++) {
    newTask += getRandomCharacter();
  }

  setTextInputValue('');
  setDisplayText(newTask);
};

export default generateTask;
