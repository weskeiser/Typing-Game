const CurrentCharacter = ({ currentCharacter }) => {
  const colorHandler = () => {
    return currentCharacter[1] === 'Correct'
      ? 'game__current-character'
      : 'game__current-character game__current-character--wrong';
  };

  return <div className={colorHandler()}>{currentCharacter[0]}</div>;
};

export default CurrentCharacter;
