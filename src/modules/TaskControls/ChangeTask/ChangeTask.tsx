import { forwardRef } from 'react';

let ChangeTask = ({}, upcomingTask) => {
  const handleChange = (e) => {
    const option = e.target;
    if (option.checked === true) {
      upcomingTask.current = {
        ...upcomingTask.current,
        [option.name]: true,
      };
    } else {
      upcomingTask.current = {
        ...upcomingTask.current,
        [option.name]: false,
      };
    }
  };

  const inputAndLabelInDiv = (id, labelName) => {
    return (
      <div className="game__main__task-controls__options">
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={true}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor={id}>{labelName}</label>
      </div>
    );
  };

  return (
    <fieldset className="game__main__task-controls__fieldset">
      <legend>Include in task:</legend>
      {inputAndLabelInDiv('lowercaseCharacters', 'Lowercase')}
      {inputAndLabelInDiv('uppercaseCharacters', 'Uppercase')}
      {inputAndLabelInDiv('numbers', 'Numbers')}
      {inputAndLabelInDiv('symbols', 'Symbols')}
    </fieldset>
  );
};

ChangeTask = forwardRef(ChangeTask);

export default ChangeTask;
