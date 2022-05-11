import ChangeDuration from './ChangeDuration/ChangeDuration';
import ChangeTask from './ChangeTask/ChangeTask';

const TaskControls = ({
  settingsVisible,
  currentDatabase,
  setCurrentDatabase,
  setTaskDuration,
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
      <ChangeDuration setTaskDuration={setTaskDuration} />
    </div>
  );
};

export default TaskControls;
