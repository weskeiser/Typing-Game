import './TaskDisplay.css';

const Display = ({ currentTask }) => {
  return (
    <>
      <p className="taskDisplay">{currentTask}</p>
    </>
  );
};

export default Display;
