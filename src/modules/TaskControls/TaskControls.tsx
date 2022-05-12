import ChangeDuration from './ChangeDuration/ChangeDuration';
import ChangeTask from './ChangeTask/ChangeTask';

let TaskControls = ({
  settingsVisible,
  currentDatabase,
  setCurrentDatabase,
  upcomingTaskDuration,
}) => {
  const handleVisibility = settingsVisible
    ? 'game__main__task-controls'
    : 'game__main__task-controls hidden';

  return (
    <div className={handleVisibility}>
      <ChangeTask
        currentDatabase={currentDatabase}
        setCurrentDatabase={setCurrentDatabase}
      />
      <ChangeDuration ref={upcomingTaskDuration} />
    </div>
  );
};

export default TaskControls;
