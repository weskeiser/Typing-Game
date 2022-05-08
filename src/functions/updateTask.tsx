import generateTask from './generateTask';

const updateTask = (
  progress,
  displayText,
  setProgress,
  characterDatabase,
  setTextInputValue,
  setDisplayText,
  taskLength
) => {
  const newProgress = progress + displayText.length;
  setProgress(newProgress);

  generateTask(
    characterDatabase,
    setTextInputValue,
    setDisplayText,
    taskLength
  );
};

export default updateTask;
