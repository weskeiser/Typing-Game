let ChangeTask = ({ upcomingTask, setUpcomingTask }) => {
  const handleChange = (e) => {
    const option = e.target;
    if (option.checked === true) {
      setUpcomingTask({ ...upcomingTask, [option.name]: true });
    } else {
      setUpcomingTask({ ...upcomingTask, [option.name]: false });
    }
  };

  const inputAndLabelInDiv = (id, labelName, checked) => {
    return (
      <div className="game__main__task-controls__options">
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={checked}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor={id}>{labelName}</label>
      </div>
    );
  };

  return (
    <fieldset className="game__main__task-controls__fieldset">
      <legend>Include next game:</legend>
      {inputAndLabelInDiv('lowercaseCharacters', 'Lowercase', true)}
      {inputAndLabelInDiv('uppercaseCharacters', 'Uppercase', false)}
      {inputAndLabelInDiv('numbers', 'Numbers', false)}
      {inputAndLabelInDiv('symbols', 'Symbols', false)}
    </fieldset>
  );
};

export default ChangeTask;
