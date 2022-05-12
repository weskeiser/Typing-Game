import ChangeDuration from './ChangeDuration/ChangeDuration';
import ChangeTask from './ChangeTask/ChangeTask';

let TaskControls = ({ settingsVisible, upcomingTask }) => {
  const handleVisibility = settingsVisible
    ? 'game__main__task-controls'
    : 'game__main__task-controls hidden';

  return (
    <div className={handleVisibility}>
      <ChangeTask ref={upcomingTask} />
      <ChangeDuration ref={upcomingTask} />
    </div>
  );
};

export default TaskControls;
