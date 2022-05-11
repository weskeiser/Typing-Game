import generateTask from './generateTask';

const updateTask = (
  currentDatabase,
  setTextInputValue,
  setDisplayText,
  taskLength
) => {
  generateTask(currentDatabase, setTextInputValue, setDisplayText, taskLength);
};

export default updateTask;
