import './TaskDisplay.css';

const Display = (props) => {
  return (
    <>
      <p className="taskDisplay">{props.currentTask}</p>
    </>
  );
};

export default Display;
