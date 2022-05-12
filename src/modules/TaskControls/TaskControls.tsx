import ChangeDuration from './ChangeDuration/ChangeDuration';
import ChangeTask from './ChangeTask/ChangeTask';

let TaskControls = ({ settingsVisible, upcomingTask, setUpcomingTask }) => {
  const handleVisibility = settingsVisible
    ? 'game__main__task-controls'
    : 'game__main__task-controls hidden';

  return (
    <div className={handleVisibility}>
      <ChangeTask
        upcomingTask={upcomingTask}
        setUpcomingTask={setUpcomingTask}
      />
      <ChangeDuration
        upcomingTask={upcomingTask}
        setUpcomingTask={setUpcomingTask}
      />
    </div>
  );
};

export default TaskControls;
