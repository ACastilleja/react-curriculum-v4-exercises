import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilter from '../../components/TaskFilter';
import TaskItem from '../../components/TaskItem';
import { getVisibleTasks } from '../../utils/visibleTasks';
import useTasks from '../../hooks/useTasks';

export default function StudentWork() {
  {
    /*Exercise 4 Custom hook useTasks */
  }
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  {
    /*Exercise 3 Helper function getVisibleTasks */
  }
  const visibleTasks = getVisibleTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* Exercise 1  and 2 UserProfile,TaskFilter, and TaskItem components */}

      <UserProfile name="Student" />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
