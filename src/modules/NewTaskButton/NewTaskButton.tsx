const NewTaskButton = (props) => {
  const handleNewTaskButton = (e) => {
    const getRandomCharacter = () => {
      return props.tempValue[
        Math.floor(Math.random() * props.tempValue.length)
      ];
    };

    let newTask = '';
    for (let i = 0; i < 8; i++) {
      newTask += getRandomCharacter();
    }

    props.setDisplayText(newTask);
  };

  return <button onClick={handleNewTaskButton}>New</button>;
};

export default NewTaskButton;
